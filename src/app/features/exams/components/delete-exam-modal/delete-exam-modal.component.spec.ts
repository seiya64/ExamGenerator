import { TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslationService } from '../../../../i18n';
import { DeleteExamModalComponent } from './delete-exam-modal.component';

describe('DeleteExamModalComponent', () => {
  const activeModal = {
    close: vi.fn(),
  };

  beforeEach(async () => {
    localStorage.clear();
    activeModal.close.mockClear();

    await TestBed.configureTestingModule({
      imports: [DeleteExamModalComponent],
      providers: [{ provide: NgbActiveModal, useValue: activeModal }],
    }).compileComponents();
  });

  it('should render the selected exam name and translated text', () => {
    const fixture = createComponent();

    fixture.detectChanges();

    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('Final algebra');
    expect(text).toContain('Eliminar examen');
    expect(text).toContain('Cancelar');
  });

  it('should respond to language changes', () => {
    const fixture = createComponent();
    TestBed.inject(TranslationService).setLanguage('en');

    fixture.detectChanges();

    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('Delete exam');
    expect(text).toContain('Cancel');
  });

  it('should return false on cancel and true on confirm', () => {
    const fixture = createComponent();
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    buttons[1].click();
    buttons[2].click();

    expect(activeModal.close).toHaveBeenNthCalledWith(1, false);
    expect(activeModal.close).toHaveBeenNthCalledWith(2, true);
  });
});

function createComponent() {
  const fixture = TestBed.createComponent(DeleteExamModalComponent);
  fixture.componentInstance.examName = 'Final algebra';
  return fixture;
}
