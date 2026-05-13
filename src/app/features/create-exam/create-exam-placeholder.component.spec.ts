import { TestBed } from '@angular/core/testing';
import { TranslationService } from '../../i18n';
import { CreateExamPlaceholderComponent } from './create-exam-placeholder.component';

describe('CreateExamPlaceholderComponent', () => {
  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [CreateExamPlaceholderComponent],
    }).compileComponents();
  });

  it('should render the Spanish placeholder by default', () => {
    const fixture = TestBed.createComponent(CreateExamPlaceholderComponent);

    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Crear examen');
  });

  it('should update text when language changes', () => {
    const fixture = TestBed.createComponent(CreateExamPlaceholderComponent);
    TestBed.inject(TranslationService).setLanguage('en');

    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Create exam');
  });
});
