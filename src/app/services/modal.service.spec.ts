import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('WHEN call setShowModal and call getShowModal with the same id THEN should return true', () => {
    service.setShowModal('add-row-modal');

    expect(service.getShowModal('add-row-modal')).toBeTruthy();
  });

  it('WHEN call hideModal and call getShowModal THEN should return false', () => {
    service.hideModal();

    expect(service.getShowModal('add-row-modal')).toBeFalsy();
  });
});
