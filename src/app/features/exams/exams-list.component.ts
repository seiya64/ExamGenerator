import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslationService, TranslationKey } from '../../i18n';
import { GeneratedExam } from '../../models';
import { ExamStorageService } from '../../services';
import { EmptyStateComponent } from '../../shared';
import { DeleteExamModalComponent } from './components/delete-exam-modal/delete-exam-modal.component';
import { ExamCardComponent } from './components/exam-card/exam-card.component';

@Component({
  selector: 'app-exams-list',
  imports: [EmptyStateComponent, ExamCardComponent, RouterLink],
  templateUrl: './exams-list.component.html',
  styleUrl: './exams-list.component.scss',
})
export class ExamsListComponent {
  private readonly examStorageService = inject(ExamStorageService);
  private readonly modalService = inject(NgbModal);
  private readonly router = inject(Router);
  private readonly translationService = inject(TranslationService);

  protected readonly exams = signal<readonly GeneratedExam[]>(this.examStorageService.loadAll());

  protected openExam(exam: GeneratedExam): void {
    void this.router.navigateByUrl(`/exams/${exam.id}`);
  }

  protected requestDelete(exam: GeneratedExam): void {
    void this.confirmDelete(exam);
  }

  protected t(key: TranslationKey): string {
    return this.translationService.translate(key);
  }

  private async confirmDelete(exam: GeneratedExam): Promise<void> {
    const modalRef = this.modalService.open(DeleteExamModalComponent, { centered: true });
    modalRef.componentInstance.examName = exam.name;

    try {
      const confirmed = await modalRef.result;

      if (confirmed === true) {
        this.examStorageService.deleteById(exam.id);
        this.exams.set(this.examStorageService.loadAll());
      }
    } catch {
      // Modal dismissals keep the exam unchanged.
    }
  }
}
