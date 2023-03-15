import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Banners } from '../interfaces/banners';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  constructor(private _http: HttpClient) { }

  private apiFortniteV1: string = environment.apiFortniteV1;

  getBanners(): Observable<Banners[]> {
    let params = new HttpParams();
    params = params.set("language", "pt-BR");

    return this._http.get<any>(this.apiFortniteV1 + '/banners', { params })
      .pipe(
        map((data) => {
          return data.data
        })
      )
  }
}