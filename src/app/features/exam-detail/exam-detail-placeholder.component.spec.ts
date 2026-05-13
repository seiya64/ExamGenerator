import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { ExamDetailPlaceholderComponent } from './exam-detail-placeholder.component';

describe('ExamDetailPlaceholderComponent', () => {
  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [ExamDetailPlaceholderComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: 'exam_1' }),
            },
          },
        },
      ],
    }).compileComponents();
  });

  it('should render the placeholder and route id', () => {
    const fixture = TestBed.createComponent(ExamDetailPlaceholderComponent);

    fixture.detectChanges();

    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('Detalle del examen');
    expect(text).toContain('exam_1');
  });
});
