import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-modal-expandir-icone',
  templateUrl: './modal-expandir-icone.component.html',
  styleUrls: ['./modal-expandir-icone.component.scss']
})

export class ModalExpandirIconeComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
