import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable, map } from 'rxjs';
import { Shop } from '../interfaces/shop';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private _http: HttpClient) {}

  private apiFortniteV2: string = environment.apiFortniteV2;

  getShop(): Observable<Shop> {
    let params = new HttpParams();
    params = params.set('language', 'pt-BR');

    return this._http
      .get<any>(this.apiFortniteV2 + '/shop/br', { params })
      .pipe(
        map((response) => {
          const data = response.data;

          if (data.featured && data.featured.entries) {
            data.featured.entries.sort((a, b) => b.sortPriority - a.sortPriority);
          }
          
          return data;
        })
      );
  }
}
