import { Component, OnDestroy, OnInit } from '@angular/core';
import { FortniteService } from 'src/app/services/fortnite.service';
import { Observable } from 'rxjs';
import { IDataShop, IDataShopCategory } from 'src/app/interfaces/shop';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit, OnDestroy {
  shop$: Observable<IDataShop>;
  tempoRestante: string = '';
  selectedCategory: IDataShopCategory = null;
  selectedSubCategory: IDataShopCategory = null;
  private intervalo: any;

  constructor(private _fortniteService: FortniteService) {
    this.shop$ = this._fortniteService.getShop();
  }

  ngOnInit(): void {
    this.shop$.subscribe((shop) => {
      if (shop.categories && shop.categories.length > 0) {
        this.selectedCategory = shop.categories[0];
        this.selectFirstSubCategory();
      }
    });
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

  selectFirstSubCategory(): void {
    if (this.selectedCategory?.sub_category?.length > 0) {
      this.selectedSubCategory = this.selectedCategory.sub_category[0];
    } else {
      this.selectedSubCategory = null;
    }
  }

  compareCategories(c1: IDataShopCategory, c2: IDataShopCategory): boolean {
    return c1 && c2 && c1.name === c2.name;
  }

  compareSubCategories(c1: IDataShopCategory, c2: IDataShopCategory): boolean {
    return c1 && c2 && c1.name === c2.name;
  }

  atualizarTempoRestante(): void {
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
