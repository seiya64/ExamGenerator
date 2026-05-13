import { Component, inject } from '@angular/core';
import { TranslationService, TranslationKey } from '../../i18n';
import { EmptyStateComponent } from '../../shared';

@Component({
  selector: 'app-exams-placeholder',
  imports: [EmptyStateComponent],
  templateUrl: './exams-placeholder.component.html',
  styleUrl: './exams-placeholder.component.scss',
})
export class ExamsPlaceholderComponent {
  private readonly translationService = inject(TranslationService);

  protected t(key: TranslationKey): string {
    return this.translationService.translate(key);
  }
}
