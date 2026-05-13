import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Router } from '@angular/router';
import { GeneratedExam } from '../../models';
import { ExamStorageService } from '../../services';
import { ExamsListComponent } from './exams-list.component';

describe('ExamsListComponent', () => {
  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [ExamsListComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render an empty state when there are no exams', () => {
    const fixture = TestBed.createComponent(ExamsListComponent);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('No hay');
    expect(compiled.querySelector('.btn-primary')?.getAttribute('href')).toBe('/exams/new');
  });

  it('should render saved exams as cards', () => {
    TestBed.inject(ExamStorageService).save(createExam());
    const fixture = TestBed.createComponent(ExamsListComponent);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Final algebra');
    expect(compiled.textContent).toContain('1 de mayo de 2026 10:26');
    expect(compiled.querySelector('app-exam-card')).not.toBeNull();
  });

  it('should navigate to detail when opening an exam card', () => {
    TestBed.inject(ExamStorageService).save(createExam());
    const fixture = TestBed.createComponent(ExamsListComponent);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigateByUrl').mockResolvedValue(true);

    fixture.detectChanges();
    fixture.nativeElement.querySelector('app-exam-card button').click();

    expect(navigateSpy).toHaveBeenCalledWith('/exams/exam_1');
  });
});

function createExam(): GeneratedExam {
  return {
    id: 'exam_1',
    name: 'Final algebra',
    createdAt: '2026-05-01T10:26:00.000',
    questions: [],
  };
}
