import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslationService, TranslationKey } from './i18n';
import { EmptyStateComponent, LanguageSwitcherComponent } from './shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmptyStateComponent, LanguageSwitcherComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly translationService = inject(TranslationService);

  protected t(key: TranslationKey): string {
    return this.translationService.translate(key);
  }
}
