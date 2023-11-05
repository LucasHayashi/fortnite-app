import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/interfaces/news';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  noticias$: Observable<News>;

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.noticias$ = this.noticiasService.getNews();
  }
}
