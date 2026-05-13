import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { ExamStorageService } from '../../services';
import { CreateExamComponent } from './create-exam.component';

describe('CreateExamComponent', () => {
  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [CreateExamComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should add questions and keep generate hidden until there are two', () => {
    const fixture = TestBed.createComponent(CreateExamComponent);
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).not.toContain('Generar examen');

    clickButtonContaining(fixture.nativeElement, 'Añadir pregunta');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('app-question-draft')).toHaveLength(1);
    expect((fixture.nativeElement as HTMLElement).textContent).not.toContain('Generar examen');

    clickButtonContaining(fixture.nativeElement, 'Añadir pregunta');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('app-question-draft')).toHaveLength(2);
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Generar examen');
  });

  it('should show translated validation feedback for invalid form state', () => {
    const fixture = TestBed.createComponent(CreateExamComponent);
    fixture.detectChanges();

    clickButtonContaining(fixture.nativeElement, 'Añadir pregunta');
    clickButtonContaining(fixture.nativeElement, 'Añadir pregunta');
    fixture.detectChanges();
    clickButtonContaining(fixture.nativeElement, 'Generar examen');
    fixture.detectChanges();

    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('El nombre del examen es obligatorio.');
    expect(text).toContain('Selecciona un tipo de ejercicio.');
  });

  it('should save a generated exam and navigate back to exams when valid', async () => {
    const fixture = TestBed.createComponent(CreateExamComponent);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigateByUrl').mockResolvedValue(true);
    fixture.detectChanges();

    setInputValue(fixture.nativeElement.querySelector('#exam-name'), 'Final exam');
    clickButtonContaining(fixture.nativeElement, 'Añadir pregunta');
    clickButtonContaining(fixture.nativeElement, 'Añadir pregunta');
    fixture.detectChanges();
    setSelectValue(fixture.nativeElement.querySelectorAll('select')[0], 'matrix');
    setSelectValue(fixture.nativeElement.querySelectorAll('select')[1], 'basic_arithmetic');
    fixture.detectChanges();
    clickButtonContaining(fixture.nativeElement, 'Generar examen');
    fixture.detectChanges();

    expect(TestBed.inject(ExamStorageService).loadAll()).toHaveLength(1);
    expect(navigateSpy).toHaveBeenCalledWith('/exams');
  });
});

function clickButtonContaining(root: HTMLElement, text: string): void {
  const button = Array.from(root.querySelectorAll('button')).find((candidate) =>
    candidate.textContent?.includes(text),
  );
  button?.click();
}

function setInputValue(input: HTMLInputElement, value: string): void {
  input.value = value;
  input.dispatchEvent(new Event('input'));
}

function setSelectValue(select: HTMLSelectElement, value: string): void {
  select.value = value;
  select.dispatchEvent(new Event('change'));
}
