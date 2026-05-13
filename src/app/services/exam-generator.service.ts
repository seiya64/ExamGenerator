import { inject, Injectable } from '@angular/core';
import { EXERCISES } from '../data';
import { ExamDraftQuestion, Exercise, ExerciseTypeId, GeneratedExam, GeneratedQuestion } from '../models';
import { TranslationService } from '../i18n';

@Injectable({
  providedIn: 'root',
})
export class ExamGeneratorService {
  private readonly translationService = inject(TranslationService);

  generate(name: string, questions: readonly ExamDraftQuestion[]): GeneratedExam {
    const usedExerciseIds = new Set<string>();

    return {
      id: this.createExamId(),
      name: name.trim(),
      createdAt: new Date().toISOString(),
      questions: questions.map((question, index) =>
        this.generateQuestion(question, index, usedExerciseIds),
      ),
    };
  }

  private generateQuestion(
    question: ExamDraftQuestion,
    index: number,
    usedExerciseIds: Set<string>,
  ): GeneratedQuestion {
    if (!question.type) {
      throw new Error('Cannot generate an exam question without an exercise type.');
    }

    const exercise = this.pickExercise(question.type, usedExerciseIds);
    usedExerciseIds.add(exercise.id);

    return {
      name: this.resolveQuestionName(question.name, index),
      type: question.type,
      exerciseId: exercise.id,
      exerciseText: { ...exercise.text },
    };
  }

  private pickExercise(type: ExerciseTypeId, usedExerciseIds: ReadonlySet<string>): Exercise {
    const matchingExercises = EXERCISES.filter((exercise) => exercise.type === type);
    const unusedExercises = matchingExercises.filter((exercise) => !usedExerciseIds.has(exercise.id));
    const availableExercises = unusedExercises.length > 0 ? unusedExercises : matchingExercises;

    if (availableExercises.length === 0) {
      throw new Error(`No exercises available for type "${type}".`);
    }

    return availableExercises[this.randomIndex(availableExercises.length)];
  }

  private resolveQuestionName(name: string, index: number): string {
    const trimmedName = name.trim();

    return trimmedName || `${this.translationService.translate('exam.defaultQuestionName')} ${index + 1}`;
  }

  private createExamId(): string {
    return `exam_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  }

  private randomIndex(length: number): number {
    return Math.floor(Math.random() * length);
  }
}
