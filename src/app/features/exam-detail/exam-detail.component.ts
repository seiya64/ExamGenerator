import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslationService, TranslationKey } from '../../i18n';
import { GeneratedExam } from '../../models';
import { ExamStorageService } from '../../services';
import { EmptyStateComponent } from '../../shared';
import { GeneratedQuestionComponent } from './components/generated-question/generated-question.component';

const ENGLISH_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

const SPANISH_MONTHS = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
] as const;

@Component({
  selector: 'app-exam-detail',
  imports: [EmptyStateComponent, GeneratedQuestionComponent, RouterLink],
  templateUrl: './exam-detail.component.html',
  styleUrl: './exam-detail.component.scss',
})
export class ExamDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly examStorageService = inject(ExamStorageService);
  private readonly translationService = inject(TranslationService);

  protected readonly exam = this.loadExam();

  protected formattedCreatedAt(exam: GeneratedExam): string {
    const date = new Date(exam.createdAt);

    if (Number.isNaN(date.getTime())) {
      return exam.createdAt;
    }

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const time = `${this.padTime(date.getHours())}:${this.padTime(date.getMinutes())}`;

    if (this.translationService.language() === 'en') {
      return `${this.ordinalDay(day)} ${ENGLISH_MONTHS[month]} ${year} ${time}`;
    }

    return `${day} de ${SPANISH_MONTHS[month]} de ${year} ${time}`;
  }

  protected t(key: TranslationKey): string {
    return this.translationService.translate(key);
  }

  private loadExam(): GeneratedExam | undefined {
    const examId = this.route.snapshot.paramMap.get('id');

    return examId ? this.examStorageService.loadById(examId) : undefined;
  }

  private ordinalDay(day: number): string {
    if (day >= 11 && day <= 13) {
      return `${day}th`;
    }

    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  }

  private padTime(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
