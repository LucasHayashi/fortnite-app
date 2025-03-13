import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITracksEntity } from 'src/app/interfaces/shop';

@Component({
  selector: 'app-modal-expandir-musica',
  templateUrl: './modal-expandir-musica.component.html',
  styleUrls: ['./modal-expandir-musica.component.scss'],
})
export class ModalExpandirMusicaComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ITracksEntity[]) {}

  getBackgroundRadial(): string {
    return ['#1ed2eb', '#17b4dd', '#0f8ecd', '#065fb9', '#034fb1'].join(', ');
  }
}
