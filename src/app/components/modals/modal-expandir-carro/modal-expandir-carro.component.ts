import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICarsEntity } from 'src/app/interfaces/shop';

@Component({
  selector: 'app-modal-expandir-carro',
  templateUrl: './modal-expandir-carro.component.html',
  styleUrls: ['./modal-expandir-carro.component.scss'],
})
export class ModalExpandirCarroComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ICarsEntity[]) {}

  getBackgroundRadial(): string {
    return ['#1ed2eb', '#17b4dd', '#0f8ecd', '#065fb9', '#034fb1'].join(', ');
  }
}
