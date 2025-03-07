import { Injectable } from '@angular/core';
import { FortniteApiService } from './fortnite-api.service';
import { map, Observable } from 'rxjs';
import { IBanners } from '../interfaces/banners';
import { IMap } from '../interfaces/map';
import { INews } from '../interfaces/news';
import { IDataShop, IShop } from '../interfaces/shop';
import { ICosmetics } from '../interfaces/cosmetics';
import { IPlayerStats } from '../interfaces/player-stats';
import { ISearchPlayer } from '../interfaces/search-player';
import { TPlatform } from '../types/platform';

@Injectable({
  providedIn: 'root',
})
export class FortniteService {
  constructor(private _fortniteApiService: FortniteApiService) {}

  getBanners(): Observable<IBanners[]> {
    return this._fortniteApiService
      .get<any>('banners', { language: 'pt-BR' })
      .pipe(
        map((data) => {
          return data.data;
        })
      );
  }

  getMap(): Observable<IMap> {
    return this._fortniteApiService
      .get<any>('map', { language: 'pt-BR' })
      .pipe(map((value) => value.data));
  }

  getNews(): Observable<INews> {
    return this._fortniteApiService.get<any>('news', { language: 'pt-BR' });
  }

  getShop(): Observable<IDataShop> {
    return this._fortniteApiService
      .get<IShop>('shop', { language: 'pt-BR' })
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
