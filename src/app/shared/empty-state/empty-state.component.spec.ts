import { TestBed } from '@angular/core/testing';
import { EmptyStateComponent } from './empty-state.component';

describe('EmptyStateComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyStateComponent],
    }).compileComponents();
  });

  it('should render title, body, and action', () => {
    const fixture = TestBed.createComponent(EmptyStateComponent);
    fixture.componentRef.setInput('title', 'Nothing here yet');
    fixture.componentRef.setInput('body', 'Create an item to get started.');
    fixture.componentRef.setInput('actionLabel', 'Create');

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Nothing here yet');
    expect(compiled.querySelector('p')?.textContent).toContain('Create an item to get started.');
    expect(compiled.querySelector('button')?.textContent).toContain('Create');
  });

  it('should emit action clicks', () => {
    const fixture = TestBed.createComponent(EmptyStateComponent);
    const actionSpy = vi.fn();
    fixture.componentRef.setInput('title', 'Missing');
    fixture.componentRef.setInput('actionLabel', 'Go back');
    fixture.componentInstance.action.subscribe(actionSpy);

    fixture.detectChanges();
    fixture.nativeElement.querySelector('button').click();

    expect(actionSpy).toHaveBeenCalledOnce();
  });
});
