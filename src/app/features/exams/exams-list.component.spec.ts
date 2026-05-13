import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GeneratedExam } from '../../models';
import { ExamStorageService } from '../../services';
import { ExamsListComponent } from './exams-list.component';

describe('ExamsListComponent', () => {
  const modalService = {
    open: vi.fn(),
  };

  beforeEach(async () => {
    localStorage.clear();
    modalService.open.mockReturnValue(createModalRef(false));

    await TestBed.configureTestingModule({
      imports: [ExamsListComponent],
      providers: [provideRouter([]), { provide: NgbModal, useValue: modalService }],
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

  it('should keep the exam when delete confirmation is canceled', async () => {
    TestBed.inject(ExamStorageService).save(createExam());
    modalService.open.mockReturnValue(createModalRef(false));
    const fixture = TestBed.createComponent(ExamsListComponent);

    fixture.detectChanges();
    clickDelete(fixture);
    await Promise.resolve();
    fixture.detectChanges();

    expect(TestBed.inject(ExamStorageService).loadAll()).toHaveLength(1);
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Final algebra');
  });

  it('should delete only the selected exam when confirmation is accepted', async () => {
    const storage = TestBed.inject(ExamStorageService);
    storage.save(createExam('exam_1', 'Final algebra'));
    storage.save(createExam('exam_2', 'Geometry review'));
    modalService.open.mockReturnValue(createModalRef(true));
    const fixture = TestBed.createComponent(ExamsListComponent);

    fixture.detectChanges();
    clickDelete(fixture);
    await Promise.resolve();
    fixture.detectChanges();

    const remainingExams = storage.loadAll();
    expect(remainingExams).toHaveLength(1);
    expect(remainingExams[0].name).toBe('Final algebra');
    expect((fixture.nativeElement as HTMLElement).textContent).not.toContain('Geometry review');
  });
});

function createExam(id = 'exam_1', name = 'Final algebra'): GeneratedExam {
  return {
    id,
    name,
    createdAt: '2026-05-01T10:26:00.000',
    questions: [],
  };
}

function createModalRef(result: boolean) {
  return {
    componentInstance: {
      examName: '',
    },
    result: Promise.resolve(result),
  };
}

function clickDelete(fixture: ComponentFixture<ExamsListComponent>): void {
  const deleteButtons = Array.from(
    fixture.nativeElement.querySelectorAll('.btn-outline-danger'),
  ) as HTMLButtonElement[];
  deleteButtons[0].click();
}
