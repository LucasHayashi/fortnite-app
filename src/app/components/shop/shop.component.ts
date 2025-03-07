import { Component, OnDestroy, OnInit } from '@angular/core';
import { FortniteService } from 'src/app/services/fortnite.service';
import { Observable } from 'rxjs';
import { IDataShop } from 'src/app/interfaces/shop';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit, OnDestroy {
  shop$: Observable<IDataShop>;
  tempoRestante: string = '';
  private intervalo: any;

  constructor(private _fortniteService: FortniteService) {}

  ngOnInit(): void {
    this.shop$ = this._fortniteService.getShop();
    this.atualizarTempoRestante();
    this.intervalo = setInterval(() => {
      this.atualizarTempoRestante();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  private atualizarTempoRestante(): void {
    const agoraUTC = new Date().getTime();
    const amanhaUTC = new Date();
    amanhaUTC.setUTCHours(24, 0, 0, 0);

    const diferenca = amanhaUTC.getTime() - agoraUTC;

    const horas = Math.floor(diferenca / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    this.tempoRestante = `${horas}h ${minutos}m ${segundos}s`;
  }
}
