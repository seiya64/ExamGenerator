import { TestBed } from '@angular/core/testing';
import { EXERCISE_TYPES } from '../../../../data';
import { TranslationService } from '../../../../i18n';
import { QuestionDraftComponent } from './question-draft.component';

describe('QuestionDraftComponent', () => {
  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [QuestionDraftComponent],
    }).compileComponents();
  });

  it('should render a translated numbered placeholder', () => {
    const fixture = createComponent();

    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    expect(input.placeholder).toBe('Ejercicio 1');
  });

  it('should render exercise type options', () => {
    const fixture = createComponent();

    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Matrices');
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Aritmética básica');
  });

  it('should respond to language changes', () => {
    const fixture = createComponent();
    TestBed.inject(TranslationService).setLanguage('en');

    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    expect(input.placeholder).toBe('Exercise 1');
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Basic arithmetic');
  });

  it('should show missing type validation feedback', () => {
    const fixture = createComponent();
    fixture.componentRef.setInput('showValidation', true);

    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Selecciona un tipo');
    expect(fixture.nativeElement.querySelector('.is-invalid')).not.toBeNull();
  });

  it('should emit draft changes and remove events', () => {
    const fixture = createComponent();
    fixture.componentRef.setInput('canRemove', true);
    const draftSpy = vi.fn();
    const removeSpy = vi.fn();
    fixture.componentInstance.draftChange.subscribe(draftSpy);
    fixture.componentInstance.remove.subscribe(removeSpy);

    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    input.value = 'Custom name';
    input.dispatchEvent(new Event('input'));
    const select = fixture.nativeElement.querySelector('select') as HTMLSelectElement;
    select.value = 'matrix';
    select.dispatchEvent(new Event('change'));
    fixture.nativeElement.querySelector('button').click();

    expect(draftSpy).toHaveBeenCalledWith({ name: 'Custom name', type: '' });
    expect(draftSpy).toHaveBeenCalledWith({ name: '', type: 'matrix' });
    expect(removeSpy).toHaveBeenCalledOnce();
  });
});

function createComponent() {
  const fixture = TestBed.createComponent(QuestionDraftComponent);
  fixture.componentRef.setInput('draft', { name: '', type: '' });
  fixture.componentRef.setInput('index', 0);
  fixture.componentRef.setInput('exerciseTypes', EXERCISE_TYPES);
  return fixture;
}
