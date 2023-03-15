import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { PlayerStats } from '../interfaces/player-stats';

@Injectable({
  providedIn: 'root'
})
export class PlayerStatsService {

  constructor(private _http: HttpClient) { }

  private apiFortniteV2: string = environment.apiFortniteV2;
  private apiKey: string = environment.ApiKey;

  getPlayerStats(name: any, accountType: any): Observable<PlayerStats> {
    let params = new HttpParams();
    params = params.set("name", name);
    params = params.set("accountType", accountType);

    return this._http.get<PlayerStats>(this.apiFortniteV2 + '/stats/br/v2', {
      headers: {
        Authorization: this.apiKey
      },
      params
    })
  }
}
