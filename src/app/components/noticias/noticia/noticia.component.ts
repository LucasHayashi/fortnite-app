import { Component, Input } from '@angular/core';
import { Br } from 'src/app/interfaces/news';
import { MatDialog } from '@angular/material/dialog';
import { ModalExpandirImagemComponent } from '../../modals/modal-expandir-imagem/modal-expandir-imagem.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent {
  @Input() noticia: Br = {
    hash: '9ebadf7e4f2a579e7700b47aadefaa2f90a0834b',
    date: '2023-11-03T09:30:50Z',
    image: null,
    motds: null,
    messages: [
      {
        title: 'Message of the day update',
        body: "Commanders, we've moved the Save the World message of the day to appear when you first log into Fortnite!",
        image:
          'https://cdn2.unrealengine.com/Fortnite/fortnite-game/savetheworldnews/StW05_MOTD-1024x512_AntiScam-1024x512-1371b58ec57f89e3e6a5946f4f5b6ad5620edabe.jpg',
        adspace: null,
      },
    ],
  };

  noticias$: Observable<Br>;

  constructor(private dialog: MatDialog) { }

  expandirImagem(evento: any) {
    let el = evento.target;
    let imgSrc = el.src;
    let imgAlt = el.alt;

    this.dialog.open(ModalExpandirImagemComponent, {
      data: {
        imgSrc: imgSrc,
        title: imgAlt,
      },
    });
  }
}
