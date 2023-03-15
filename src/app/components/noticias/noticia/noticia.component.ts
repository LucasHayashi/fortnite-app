import { Component, Input } from '@angular/core';
import { News } from 'src/app/interfaces/news';
import { NoticiasService } from '../../noticias.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalExpandirImagemComponent } from '../../modals/modal-expandir-imagem/modal-expandir-imagem.component';
import { Observable, finalize } from 'rxjs';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent {
  @Input() tipo: string = "br";

  isLoading = true;
  noticias$: Observable<News>;

  constructor(private noticiasService: NoticiasService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.noticias$ = this.noticiasService.getNews(this.tipo).pipe(
      finalize( () => {
        this.isLoading = false;
      })
    );
  }

  expandirImagem(evento: any) {
    let el = evento.target;
    let imgSrc = el.src;
    let imgAlt = el.alt;

    this.dialog.open(ModalExpandirImagemComponent, {
      data: {
        imgSrc: imgSrc,
        title: imgAlt
      }
    })
  }
}
