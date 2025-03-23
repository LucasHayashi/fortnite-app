import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICosmetic } from 'src/app/interfaces/cosmetic';

@Component({
  selector: 'app-modal-expandir-item',
  templateUrl: './modal-expandir-item.component.html',
  styleUrls: ['./modal-expandir-item.component.scss'],
})
export class ModalExpandirItemComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ICosmetic) {}

  getBackgroundRadial(cores: string[]): string {
    if (cores) {
      return cores.map((cor) => '#' + cor).join(', ');
    }
    return ['#1ed2eb', '#17b4dd', '#0f8ecd', '#065fb9', '#034fb1'].join(', ');
  }
}
