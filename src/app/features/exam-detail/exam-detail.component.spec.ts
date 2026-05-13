import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { TranslationService } from '../../i18n';
import { GeneratedExam } from '../../models';
import { ExamStorageService } from '../../services';
import { ExamDetailComponent } from './exam-detail.component';

describe('ExamDetailComponent', () => {
  beforeEach(async () => {
    localStorage.clear();
  });

  it('should render a saved generated exam', async () => {
    await configureTestingModule('exam_1');
    TestBed.inject(ExamStorageService).save(createExam());
    const fixture = TestBed.createComponent(ExamDetailComponent);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Final algebra');
    expect(compiled.textContent).toContain('1 de mayo de 2026 10:26');
    expect(compiled.textContent).toContain('Custom question');
    expect(compiled.querySelector('app-generated-question')).not.toBeNull();
  });

  it('should show a not-found state for a missing exam', async () => {
    await configureTestingModule('missing');
    const fixture = TestBed.createComponent(ExamDetailComponent);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('No encontramos ese examen');
    expect(compiled.querySelector('app-empty-state')).not.toBeNull();
  });

  it('should switch exercise text when language changes', async () => {
    await configureTestingModule('exam_1');
    TestBed.inject(ExamStorageService).save(createExam());
    const fixture = TestBed.createComponent(ExamDetailComponent);

    fixture.detectChanges();
    TestBed.inject(TranslationService).setLanguage('en');
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Calculate 2 + 2.');
  });

  it('should not render edit controls', async () => {
    await configureTestingModule('exam_1');
    TestBed.inject(ExamStorageService).save(createExam());
    const fixture = TestBed.createComponent(ExamDetailComponent);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('input')).toBeNull();
    expect(compiled.querySelector('select')).toBeNull();
  });
});

async function configureTestingModule(examId: string): Promise<void> {
  await TestBed.configureTestingModule({
    imports: [ExamDetailComponent],
    providers: [
      provideRouter([]),
      {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: convertToParamMap({ id: examId }),
          },
        },
      },
    ],
  }).compileComponents();
}

function createExam(): GeneratedExam {
  return {
    id: 'exam_1',
    name: 'Final algebra',
    createdAt: '2026-05-01T10:26:00.000',
    questions: [
      {
        name: 'Custom question',
        type: 'basic_arithmetic',
        exerciseId: 'basic_arithmetic_01',
        exerciseText: {
          es: 'Calcula 2 + 2.',
          en: 'Calculate 2 + 2.',
        },
      },
    ],
  };
}
