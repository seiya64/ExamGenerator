import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss',
})
export class EmptyStateComponent {
  readonly eyebrow = input<string>();
  readonly title = input.required<string>();
  readonly body = input<string>();
  readonly actionLabel = input<string>();
  readonly action = output<void>();

  protected onAction(): void {
    this.action.emit();
  }
}
