import { Component, Input } from '@angular/core';
import { Br, MOTD } from 'src/app/interfaces/news';
import { MatDialog } from '@angular/material/dialog';
import { ModalExpandirImagemComponent } from '../../modals/modal-expandir-imagem/modal-expandir-imagem.component';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent {
  @Input() noticia: Br;

  constructor(private dialog: MatDialog) {}

  expandirImagem(item: MOTD) {
    this.dialog.open(ModalExpandirImagemComponent, {
      data: item,
    });
  }
}
