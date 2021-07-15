import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalId: string = '';
  private show: boolean = false;

  constructor() {}

  getShowModal(id: string) {
    return this.show && this.modalId === id;
  }

  setShowModal(id: string) {
    if (this.show !== true) {
      this.show = true;
      this.modalId = id;
    }
  }

  hideModal() {
    this.show = false;
    this.modalId = '';
  }
}
