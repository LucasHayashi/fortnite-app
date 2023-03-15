import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-modal-expandir-imagem',
  templateUrl: './modal-expandir-imagem.component.html',
  styleUrls: ['./modal-expandir-imagem.component.scss']
})
export class ModalExpandirImagemComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
