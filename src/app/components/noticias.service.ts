import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { map, Observable, tap } from 'rxjs';
import { News } from '../interfaces/news';

@Injectable({
  providedIn: 'root'
})

export class NoticiasService {

  constructor(private _http: HttpClient) { }

  private apiFortniteV2: string = environment.apiFortniteV2;

  getNews(tipo: string): Observable<News> {
    return this._http.get<any>(this.apiFortniteV2 + `/news/${tipo}?language=pt-BR`)
      .pipe(
        map((data) => {
          return { motds: data.data.motds, messages: data.data.messages }
        })
      );
  }
}