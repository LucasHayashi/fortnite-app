import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/app/interfaces/shop';

@Component({
  selector: 'app-modal-expandir-items',
  templateUrl: './modal-expandir-items.component.html',
  styleUrls: ['./modal-expandir-items.component.scss']
})
export class ModalExpandirItemsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Item[]) { }

  getBackgroundRadial(): string {
    return ['#1ed2eb', '#17b4dd', '#0f8ecd', '#065fb9', '#034fb1'].join(', ');
  }
}
