import { Injectable } from '@angular/core';
import { FortniteApiService } from './fortnite-api.service';
import { map, Observable, switchMap } from 'rxjs';
import { IBanners } from '../interfaces/banners';
import { IMap } from '../interfaces/map';
import { INews } from '../interfaces/news';
import { ICosmetics } from '../interfaces/cosmetics';
import { IPlayerStats } from '../interfaces/player-stats';
import { ISearchPlayer } from '../interfaces/search-player';
import { TPlatform } from '../types/platform';
import { DefaultResponse } from '../interfaces/default-response';
import { IShop } from '../interfaces/shop';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class FortniteService {
  constructor(
    private _fortniteApiService: FortniteApiService,
    private languageService: LanguageService
  ) {}

  getBanners(): Observable<IBanners[]> {
    return this.languageService.currentLanguage$.pipe(
      switchMap((language) =>
        this._fortniteApiService.get<DefaultResponse<IBanners[]>>('banners', {
          language: language.code,
        })
      ),
      map((response) => response.data)
    );
  }

  getMap(): Observable<IMap> {
    return this.languageService.currentLanguage$.pipe(
      switchMap((language) =>
        this._fortniteApiService.get<DefaultResponse<IMap>>('map', {
          language: language.code,
        })
      ),
      map((response) => response.data)
    );
  }

  getNews(): Observable<INews> {
    return this.languageService.currentLanguage$.pipe(
      switchMap((language) =>
        this._fortniteApiService.get<DefaultResponse<INews>>('news', {
          language: language.code,
        })
      ),
      map((response) => response.data)
    );
  }

  getShop(): Observable<IShop> {
    return this.languageService.currentLanguage$.pipe(
      switchMap((language) =>
        this._fortniteApiService.get<DefaultResponse<IShop>>('shop', {
          language: language.code,
        })
      ),
      map((response) => response.data)
    );
  }

  getItens(name: string): Observable<ICosmetics> {
    return this.languageService.currentLanguage$.pipe(
      switchMap((language) =>
        this._fortniteApiService.get<ICosmetics>('cosmetics/search', {
          language: language.code,
          searchLanguage: language.code,
          matchMethod: 'contains',
          name,
        })
      )
    );
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
