import { Component, inject, input } from '@angular/core';
import { EXERCISE_TYPES } from '../../../../data';
import { LanguageCode, TranslationService, TranslationKey } from '../../../../i18n';
import { ExerciseType, GeneratedQuestion } from '../../../../models';

@Component({
  selector: 'app-generated-question',
  templateUrl: './generated-question.component.html',
  styleUrl: './generated-question.component.scss',
})
export class GeneratedQuestionComponent {
  readonly question = input.required<GeneratedQuestion>();
  readonly index = input.required<number>();

  private readonly translationService = inject(TranslationService);
  protected readonly language = this.translationService.language;

  protected questionNumber(): number {
    return this.index() + 1;
  }

  protected exerciseTypeLabel(): string {
    const type = EXERCISE_TYPES.find((exerciseType) => exerciseType.id === this.question().type);

    return type ? this.typeLabel(type) : this.question().type;
  }

  protected exerciseText(): string {
    return this.question().exerciseText[this.language() as LanguageCode];
  }

  protected t(key: TranslationKey): string {
    return this.translationService.translate(key);
  }

  private typeLabel(type: ExerciseType): string {
    return type.label[this.language() as LanguageCode];
  }
}
