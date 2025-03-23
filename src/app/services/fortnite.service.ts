import { Injectable } from '@angular/core';
import { FortniteApiService } from './fortnite-api.service';
import { map, Observable } from 'rxjs';
import { IBanners } from '../interfaces/banners';
import { IMap } from '../interfaces/map';
import { INews } from '../interfaces/news';
import { ICosmetics } from '../interfaces/cosmetics';
import { IPlayerStats } from '../interfaces/player-stats';
import { ISearchPlayer } from '../interfaces/search-player';
import { TPlatform } from '../types/platform';
import { DefaultResponse } from '../interfaces/default-response';
import { IShop } from '../interfaces/shop';

@Injectable({
  providedIn: 'root',
})
export class FortniteService {
  constructor(private _fortniteApiService: FortniteApiService) {}

  getBanners(): Observable<IBanners[]> {
    return this._fortniteApiService
      .get<DefaultResponse<IBanners[]>>('banners', { language: 'pt-BR' })
      .pipe(
        map((data) => {
          return data.data;
        })
      );
  }

  getMap(): Observable<IMap> {
    return this._fortniteApiService
      .get<DefaultResponse<IMap>>('map', { language: 'pt-BR' })
      .pipe(map((value) => value.data));
  }

  getNews(): Observable<INews> {
    return this._fortniteApiService
      .get<DefaultResponse<INews>>('news', {
        language: 'pt-BR',
      })
      .pipe(map((value) => value.data));
  }

  getShop(): Observable<IShop> {
    return this._fortniteApiService
      .get<DefaultResponse<IShop>>('shop', { language: 'pt-BR' })
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  getItens(name: string): Observable<ICosmetics> {
    return this._fortniteApiService.get<ICosmetics>('cosmetics/search', {
      language: 'pt-BR',
      searchLanguage: 'pt-BR',
      matchMethod: 'contains',
      name,
    });
  }

  searchPlayer(
    username: string,
    platform: TPlatform
  ): Observable<ISearchPlayer> {
    return this._fortniteApiService.get<ISearchPlayer>('players/search', {
      username,
      platform,
    });
  }

  getPlayerStats(account: string): Observable<IPlayerStats> {
    return this._fortniteApiService.get<IPlayerStats>('players/stats', {
      account,
    });
  }
}
