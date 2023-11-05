import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Map } from '../interfaces/map';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private _http: HttpClient) {}

  private apiFortniteV1: string = environment.apiFortniteV1;

  getMap(): Observable<Map> {
    let params = new HttpParams();
    params = params.set('language', 'pt-BR');

    return this._http
      .get<any>(this.apiFortniteV1 + '/map', { params })
      .pipe(map((value) => value.data));
  }
}
