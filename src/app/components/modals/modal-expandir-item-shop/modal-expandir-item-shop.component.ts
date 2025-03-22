import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEntriesEntity } from 'src/app/interfaces/shop';

@Component({
  selector: 'app-modal-expandir-item-shop',
  templateUrl: './modal-expandir-item-shop.component.html',
  styleUrls: ['./modal-expandir-item-shop.component.scss'],
})
export class ModalExpandirItemShopComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IEntriesEntity) {}
}
