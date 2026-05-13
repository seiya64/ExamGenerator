import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslationService, TranslationKey } from '../../../../i18n';

@Component({
  selector: 'app-delete-exam-modal',
  templateUrl: './delete-exam-modal.component.html',
})
export class DeleteExamModalComponent {
  @Input({ required: true }) examName = '';

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
