import { TestBed } from '@angular/core/testing';
import { TranslationService } from '../../i18n';
import { LanguageSwitcherComponent } from './language-switcher.component';

describe('LanguageSwitcherComponent', () => {
  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [LanguageSwitcherComponent],
    }).compileComponents();
  });

  it('should switch the active language', () => {
    const fixture = TestBed.createComponent(LanguageSwitcherComponent);
    const translationService = TestBed.inject(TranslationService);

    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    buttons[1].click();

    expect(translationService.language()).toBe('en');
  });
});
