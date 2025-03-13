import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IInstrumentsEntity } from 'src/app/interfaces/shop';

@Component({
  selector: 'app-modal-expandir-instrumento',
  templateUrl: './modal-expandir-instrumento.component.html',
  styleUrls: ['./modal-expandir-instrumento.component.scss'],
})
export class ModalExpandirInstrumentoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IInstrumentsEntity[]) {}

  getBackgroundRadial(): string {
    return ['#1ed2eb', '#17b4dd', '#0f8ecd', '#065fb9', '#034fb1'].join(', ');
  }
}
