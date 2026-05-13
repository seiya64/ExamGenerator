import { TestBed } from '@angular/core/testing';
import { TranslationService } from '../../../../i18n';
import { GeneratedQuestion } from '../../../../models';
import { GeneratedQuestionComponent } from './generated-question.component';

describe('GeneratedQuestionComponent', () => {
  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [GeneratedQuestionComponent],
    }).compileComponents();
  });

  it('should render question name, exercise type, and Spanish exercise text', () => {
    const fixture = createComponent();

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Custom question');
    expect(compiled.textContent).toContain('Aritmética básica');
    expect(compiled.textContent).toContain('Calcula 2 + 2.');
  });

  it('should switch exercise text and type label when language changes', () => {
    const fixture = createComponent();
    TestBed.inject(TranslationService).setLanguage('en');

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Basic arithmetic');
    expect(compiled.textContent).toContain('Calculate 2 + 2.');
  });

  it('should not render edit controls', () => {
    const fixture = createComponent();

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('input')).toBeNull();
    expect(compiled.querySelector('select')).toBeNull();
    expect(compiled.querySelector('button')).toBeNull();
  });
});

function createComponent() {
  const fixture = TestBed.createComponent(GeneratedQuestionComponent);
  fixture.componentRef.setInput('question', createQuestion());
  fixture.componentRef.setInput('index', 0);
  return fixture;
}

function createQuestion(): GeneratedQuestion {
  return {
    name: 'Custom question',
    type: 'basic_arithmetic',
    exerciseId: 'basic_arithmetic_01',
    exerciseText: {
      es: 'Calcula 2 + 2.',
      en: 'Calculate 2 + 2.',
    },
  };
}
