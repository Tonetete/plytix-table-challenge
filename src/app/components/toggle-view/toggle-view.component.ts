import { Component, OnInit } from '@angular/core';

import { faTable, faColumns } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toggle-view',
  templateUrl: './toggle-view.component.html',
  styleUrls: ['./toggle-view.component.scss'],
})
export class ToggleViewComponent implements OnInit {
  public faColumns = faColumns;
  public faTable = faTable;
  public showTable: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleView() {
    this.showTable = !this.showTable;
  }
}
