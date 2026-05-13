import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslationService, TranslationKey } from '../../i18n';
import { EmptyStateComponent } from '../../shared';

@Component({
  selector: 'app-exam-detail-placeholder',
  imports: [EmptyStateComponent],
  templateUrl: './exam-detail-placeholder.component.html',
})
export class ExamDetailPlaceholderComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly translationService = inject(TranslationService);

  protected readonly examId = this.route.snapshot.paramMap.get('id') ?? '';

  protected t(key: TranslationKey): string {
    return this.translationService.translate(key);
  }
}
