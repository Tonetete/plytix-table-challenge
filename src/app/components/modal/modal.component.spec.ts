import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalService } from '../../services/modal.service';

import { ModalComponent } from './modal.component';

class FakeModalService {
  static modalId: string = '';
  static show: boolean = false;

  getShowModal(id: string) {
    return FakeModalService.show && FakeModalService.modalId === id;
  }

  setShowModal(modalId: string) {
    FakeModalService.modalId = modalId;
    FakeModalService.show = true;
  }

  hideModal() {
    FakeModalService.modalId = '';
    FakeModalService.show = false;
  }
}

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
      providers: [{ provide: ModalService, useClass: FakeModalService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    component.resetForm = () => {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('WHEN showModal THEN should call setShowModal from modal service to set modal id', () => {
    component.modalId = 'modal-add-row';
    fixture.detectChanges();

    component.showModal();

    expect(FakeModalService.modalId).toBe(component.modalId);
    expect(FakeModalService.show).toBe(true);
  });

  it('WHEN closeModal THEN should call hideModal from modal service so remove modalId and show to false', () => {
    component.modalId = 'modal-add-row';
    fixture.detectChanges();

    component.closeModal();

    expect(FakeModalService.modalId).toBe('');
    expect(FakeModalService.show).toBe(false);
  });
});
