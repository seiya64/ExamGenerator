import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageCode, TranslationService, TranslationKey } from './i18n';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly translationService = inject(TranslationService);
  protected readonly language = this.translationService.language;

  protected setLanguage(language: LanguageCode): void {
    this.translationService.setLanguage(language);
  }

  protected t(key: TranslationKey): string {
    return this.translationService.translate(key);
  }
}
