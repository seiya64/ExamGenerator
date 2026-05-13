import { TestBed } from '@angular/core/testing';
import { GeneratedExam } from '../../models';
import { ExamStorageService } from '../../services';
import { ExamsListComponent } from './exams-list.component';

describe('ExamsListComponent', () => {
  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [ExamsListComponent],
    }).compileComponents();
  });

  it('should render an empty state when there are no exams', () => {
    const fixture = TestBed.createComponent(ExamsListComponent);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('No hay');
    expect(compiled.querySelector('.btn-primary')?.hasAttribute('disabled')).toBe(true);
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
});

function createExam(): GeneratedExam {
  return {
    id: 'exam_1',
    name: 'Final algebra',
    createdAt: '2026-05-01T10:26:00.000',
    questions: [],
  };
}
