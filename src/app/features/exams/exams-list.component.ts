import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService, TranslationKey } from '../../i18n';
import { GeneratedExam } from '../../models';
import { ExamStorageService } from '../../services';
import { EmptyStateComponent } from '../../shared';
import { ExamCardComponent } from './components/exam-card/exam-card.component';

@Component({
  selector: 'app-exams-list',
  imports: [EmptyStateComponent, ExamCardComponent, RouterLink],
  templateUrl: './exams-list.component.html',
  styleUrl: './exams-list.component.scss',
})
export class ExamsListComponent {
  private readonly examStorageService = inject(ExamStorageService);
  private readonly translationService = inject(TranslationService);

  protected readonly exams = signal<readonly GeneratedExam[]>(this.examStorageService.loadAll());

  protected openExam(_exam: GeneratedExam): void {
    // Detail navigation is added once the /exams/:id route exists.
  }

  protected requestDelete(_exam: GeneratedExam): void {
    // Delete behavior is added once the confirmation modal exists.
  }

  protected t(key: TranslationKey): string {
    return this.translationService.translate(key);
  }
}
