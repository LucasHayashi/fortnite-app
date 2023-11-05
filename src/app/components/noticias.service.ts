import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { map, Observable, tap } from 'rxjs';
import { News } from '../interfaces/news';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  constructor(private _http: HttpClient) {}

  private apiFortniteV2: string = environment.apiFortniteV2;

  getNews(): Observable<News> {
    return this._http.get<any>(this.apiFortniteV2 + `/news?language=pt-BR`);
  }
}
