import { TestBed } from '@angular/core/testing';
import { TranslationService } from '../../i18n';
import { ExamsPlaceholderComponent } from './exams-placeholder.component';

describe('ExamsPlaceholderComponent', () => {
  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [ExamsPlaceholderComponent],
    }).compileComponents();
  });

  it('should render the Spanish placeholder by default', () => {
    const fixture = TestBed.createComponent(ExamsPlaceholderComponent);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Listado de');
    expect(compiled.querySelector('button')?.hasAttribute('disabled')).toBe(true);
  });

  it('should update placeholder text when language changes', () => {
    const fixture = TestBed.createComponent(ExamsPlaceholderComponent);
    const translationService = TestBed.inject(TranslationService);

    fixture.detectChanges();
    translationService.setLanguage('en');
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Exams list');
  });
});
