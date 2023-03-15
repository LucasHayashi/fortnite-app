import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Cosmetics } from '../interfaces/cosmetics';

@Injectable({
  providedIn: 'root'
})
export class BuscarItensService {

  constructor(private _http: HttpClient) { }

  private apiFortniteV2: string = environment.apiFortniteV2;

  getItens(name: string): Observable<Cosmetics> {
    let params = new HttpParams();
    params = params.set("language", "pt-BR");
    params = params.set("searchLanguage", "pt-BR");
    params = params.set("matchMethod", "contains");
    params = params.set("name", name);

    return this._http.get<Cosmetics>(this.apiFortniteV2 + '/cosmetics/br/search/all', { params })
  }
}
