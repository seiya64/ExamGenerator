import { TestBed } from '@angular/core/testing';
import { TranslationService } from '../../../../i18n';
import { GeneratedExam } from '../../../../models';
import { ExamCardComponent } from './exam-card.component';

describe('ExamCardComponent', () => {
  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [ExamCardComponent],
    }).compileComponents();
  });

  it('should render the exam name and Spanish date by default', () => {
    const fixture = TestBed.createComponent(ExamCardComponent);
    fixture.componentRef.setInput('exam', createExam());

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Midterm algebra');
    expect(compiled.textContent).toContain('1 de mayo de 2026 10:26');
  });

  it('should render the English date when English is active', () => {
    const fixture = TestBed.createComponent(ExamCardComponent);
    TestBed.inject(TranslationService).setLanguage('en');
    fixture.componentRef.setInput('exam', createExam());

    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('1st May 2026 10:26');
  });

  it('should emit open and delete outputs independently', () => {
    const fixture = TestBed.createComponent(ExamCardComponent);
    const exam = createExam();
    const openSpy = vi.fn();
    const deleteSpy = vi.fn();
    fixture.componentRef.setInput('exam', exam);
    fixture.componentInstance.openExam.subscribe(openSpy);
    fixture.componentInstance.deleteExam.subscribe(deleteSpy);

    fixture.detectChanges();
    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    buttons[0].click();
    buttons[1].click();

    expect(openSpy).toHaveBeenCalledOnce();
    expect(openSpy).toHaveBeenCalledWith(exam);
    expect(deleteSpy).toHaveBeenCalledOnce();
    expect(deleteSpy).toHaveBeenCalledWith(exam);
  });
});

function createExam(): GeneratedExam {
  return {
    id: 'exam_1',
    name: 'Midterm algebra',
    createdAt: '2026-05-01T10:26:00.000',
    questions: [],
  };
}
