import { Component, inject, input, output } from '@angular/core';
import { LanguageCode, TranslationService, TranslationKey } from '../../../../i18n';
import { ExamDraftQuestion, ExerciseType, ExerciseTypeId } from '../../../../models';

@Component({
  selector: 'app-question-draft',
  templateUrl: './question-draft.component.html',
  styleUrl: './question-draft.component.scss',
})
export class QuestionDraftComponent {
  readonly draft = input.required<ExamDraftQuestion>();
  readonly index = input.required<number>();
  readonly exerciseTypes = input.required<readonly ExerciseType[]>();
  readonly showValidation = input(false);
  readonly canRemove = input(false);

  readonly draftChange = output<ExamDraftQuestion>();
  readonly remove = output<void>();

  private readonly translationService = inject(TranslationService);
  protected readonly language = this.translationService.language;

  protected defaultNamePlaceholder(): string {
    return `${this.t('exam.defaultQuestionName')} ${this.index() + 1}`;
  }

  protected typeLabel(type: ExerciseType): string {
    return type.label[this.language() as LanguageCode];
  }

  protected onNameChange(event: Event): void {
    this.emitDraftChange({
      ...this.draft(),
      name: (event.target as HTMLInputElement).value,
    });
  }

  protected onTypeChange(event: Event): void {
    this.emitDraftChange({
      ...this.draft(),
      type: (event.target as HTMLSelectElement).value as ExerciseTypeId | '',
    });
  }

  protected onRemove(): void {
    this.remove.emit();
  }

  protected shouldShowTypeError(): boolean {
    return this.showValidation() && !this.draft().type;
  }

  protected t(key: TranslationKey): string {
    return this.translationService.translate(key);
  }

  private emitDraftChange(draft: ExamDraftQuestion): void {
    this.draftChange.emit(draft);
  }
}
