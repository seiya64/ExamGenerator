import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { EXERCISE_TYPES } from '../../data';
import { TranslationService, TranslationKey } from '../../i18n';
import { ExamDraftQuestion } from '../../models';
import { ExamGeneratorService, ExamStorageService } from '../../services';
import { QuestionDraftComponent } from './components/question-draft/question-draft.component';

@Component({
  selector: 'app-create-exam',
  imports: [QuestionDraftComponent],
  templateUrl: './create-exam.component.html',
  styleUrl: './create-exam.component.scss',
})
export class CreateExamComponent {
  private readonly examGeneratorService = inject(ExamGeneratorService);
  private readonly examStorageService = inject(ExamStorageService);
  private readonly router = inject(Router);
  private readonly translationService = inject(TranslationService);

  protected readonly exerciseTypes = EXERCISE_TYPES;
  protected readonly examName = signal('');
  protected readonly questions = signal<readonly ExamDraftQuestion[]>([]);
  protected readonly submitted = signal(false);

  protected addQuestion(): void {
    this.questions.update((questions) => [...questions, { name: '', type: '' }]);
  }

  protected updateQuestion(index: number, question: ExamDraftQuestion): void {
    this.questions.update((questions) =>
      questions.map((currentQuestion, currentIndex) =>
        currentIndex === index ? question : currentQuestion,
      ),
    );
  }

  protected removeQuestion(index: number): void {
    this.questions.update((questions) =>
      questions.filter((_question, currentIndex) => currentIndex !== index),
    );
  }

  protected updateExamName(event: Event): void {
    this.examName.set((event.target as HTMLInputElement).value);
  }

  protected canGenerate(): boolean {
    return this.questions().length > 1;
  }

  protected hasNameError(): boolean {
    return this.submitted() && !this.examName().trim();
  }

  protected hasMinimumQuestionsError(): boolean {
    return this.submitted() && this.questions().length < 2;
  }

  protected showQuestionTypeError(question: ExamDraftQuestion): boolean {
    return this.submitted() && !question.type;
  }

  protected generate(): void {
    this.submitted.set(true);

    if (!this.isValid()) {
      return;
    }

    const exam = this.examGeneratorService.generate(this.examName(), this.questions());
    this.examStorageService.save(exam);
    void this.router.navigateByUrl('/exams');
  }

  protected submit(event: SubmitEvent): void {
    event.preventDefault();
    this.generate();
  }

  protected t(key: TranslationKey): string {
    return this.translationService.translate(key);
  }

  private isValid(): boolean {
    return (
      Boolean(this.examName().trim()) &&
      this.questions().length >= 2 &&
      this.questions().every((question) => Boolean(question.type))
    );
  }
}
