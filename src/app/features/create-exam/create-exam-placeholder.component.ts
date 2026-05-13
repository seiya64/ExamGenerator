import { Component, inject } from '@angular/core';
import { TranslationService, TranslationKey } from '../../i18n';
import { EmptyStateComponent } from '../../shared';

@Component({
  selector: 'app-create-exam-placeholder',
  imports: [EmptyStateComponent],
  templateUrl: './create-exam-placeholder.component.html',
})
export class CreateExamPlaceholderComponent {
  private readonly translationService = inject(TranslationService);

  protected t(key: TranslationKey): string {
    return this.translationService.translate(key);
  }
}
