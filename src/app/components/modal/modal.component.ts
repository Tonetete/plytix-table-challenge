import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title: string = '';
  @Input() modalId: string = '';
  @Input() resetForm!: () => void;

  constructor(public modalService: ModalService) {}

  ngOnInit(): void {}

  showModal() {
    this.modalService.setShowModal(this.modalId);
  }

  closeModal() {
    if (this.resetForm) {
      this.resetForm();
    }
    this.modalService.hideModal();
  }
}
