import { Component, inject } from '@angular/core';
import { LanguageCode, TranslationService, TranslationKey } from '../../i18n';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
})
export class LanguageSwitcherComponent {
  private readonly translationService = inject(TranslationService);
  protected readonly language = this.translationService.language;

  protected setLanguage(language: LanguageCode): void {
    this.translationService.setLanguage(language);
  }

  protected t(key: TranslationKey): string {
    return this.translationService.translate(key);
  }
}
