import { Component, inject, input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslationService, TranslationKey } from '../../../../i18n';

@Component({
  selector: 'app-delete-exam-modal',
  templateUrl: './delete-exam-modal.component.html',
})
export class DeleteExamModalComponent {
  readonly examName = input.required<string>();

  private readonly activeModal = inject(NgbActiveModal);
  private readonly translationService = inject(TranslationService);

  protected cancel(): void {
    this.activeModal.close(false);
  }

  protected confirm(): void {
    this.activeModal.close(true);
  }

  protected t(key: TranslationKey): string {
    return this.translationService.translate(key);
  }
}
