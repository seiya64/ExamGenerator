import { Component, inject, input, output } from '@angular/core';
import { TranslationService, TranslationKey } from '../../../../i18n';
import { GeneratedExam } from '../../../../models';

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
  selector: 'app-exam-card',
  templateUrl: './exam-card.component.html',
  styleUrl: './exam-card.component.scss',
})
export class ExamCardComponent {
  readonly exam = input.required<GeneratedExam>();
  readonly openExam = output<GeneratedExam>();
  readonly deleteExam = output<GeneratedExam>();

  private readonly translationService = inject(TranslationService);

  protected open(): void {
    this.openExam.emit(this.exam());
  }

  protected requestDelete(event: Event): void {
    event.stopPropagation();
    this.deleteExam.emit(this.exam());
  }

  protected formattedCreatedAt(): string {
    const date = new Date(this.exam().createdAt);

    if (Number.isNaN(date.getTime())) {
      return this.exam().createdAt;
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
