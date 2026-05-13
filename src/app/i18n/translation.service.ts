import { Injectable, signal } from '@angular/core';
import { DEFAULT_LANGUAGE, LanguageCode, TRANSLATIONS, TranslationKey } from './translations';

const LANGUAGE_STORAGE_KEY = 'exam-generator-language';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  readonly language = signal<LanguageCode>(this.getInitialLanguage());

  setLanguage(language: LanguageCode): void {
    this.language.set(language);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }

  translate(key: TranslationKey): string {
    return TRANSLATIONS[this.language()][key];
  }

  private getInitialLanguage(): LanguageCode {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    return this.isLanguageCode(storedLanguage) ? storedLanguage : DEFAULT_LANGUAGE;
  }

  private isLanguageCode(value: string | null): value is LanguageCode {
    return value === 'es' || value === 'en';
  }
}
