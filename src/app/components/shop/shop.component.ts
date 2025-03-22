import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FortniteService } from 'src/app/services/fortnite.service';
import { Observable, Subscription, map } from 'rxjs';
import { IDataShop, IDataShopCategory } from 'src/app/interfaces/shop';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LoadingService } from 'src/app/services/loading.service';

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
  selectedCategoryIndex: number = 0;
  categories: IDataShopCategory[] = [];
  isMobile: boolean = false;
  @ViewChild('categoryTitle') categoryTitle!: ElementRef;
  private intervalo: any;

  private subscriptions = new Subscription();

  constructor(
    private _fortniteService: FortniteService,
    private breakpointObserver: BreakpointObserver,
    private loadingService: LoadingService
  ) {
    this.shop$ = this._fortniteService.getShop();
  }

  ngOnInit(): void {
    const shopSubscription = this.shop$.subscribe((shop) => {
      if (shop.categories && shop.categories.length > 0) {
        this.categories = shop.categories;
        this.selectedCategory = this.categories[0];
        this.selectedCategoryIndex = 0;
        this.selectFirstSubCategory();
      }
    });

    this.subscriptions.add(shopSubscription);

    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((result) => {
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
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
    this.subscriptions.unsubscribe();
  }

  navegarCategoria(direcao: number): void {
    this.loadingService.show();
    const novoIndex = this.selectedCategoryIndex + direcao;
    if (
      this.categories &&
      novoIndex >= 0 &&
      novoIndex < this.categories.length
    ) {
      this.selectedCategoryIndex = novoIndex;
      this.selectedCategory = this.categories[novoIndex];
      this.selectFirstSubCategory();

      setTimeout(() => {
        if (this.categoryTitle) {
          this.categoryTitle.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
          this.loadingService.hide();
        }
      }, 100);
    }
  }

  onCategoryChanged(): void {
    if (
      this.categories &&
      this.selectedCategoryIndex < this.categories.length
    ) {
      this.selectedCategory = this.categories[this.selectedCategoryIndex];
      this.selectFirstSubCategory();
    }
  }

  selectFirstSubCategory(): void {
    if (
      this.selectedCategory &&
      this.selectedCategory.sub_category &&
      this.selectedCategory.sub_category.length > 0
    ) {
      this.selectedSubCategory = this.selectedCategory.sub_category[0];
    } else {
      this.selectedSubCategory = null;
    }
  }

  resetSelection(): void {
    this.selectedCategoryIndex = 0;

    if (this.categories && this.categories.length > 0) {
      this.selectedCategory = this.categories[0];
      this.selectFirstSubCategory();
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
