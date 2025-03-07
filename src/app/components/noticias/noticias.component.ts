import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from 'src/app/interfaces/news';
import { FortniteService } from 'src/app/services/fortnite.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  noticias$: Observable<INews>;

  constructor(private _fortniteService: FortniteService) {}

  ngOnInit(): void {
    this.noticias$ = this._fortniteService.getNews();
  }
}
