import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { NoticiasComponent } from './components/noticias/noticias.component';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { NoticiaComponent } from './components/noticias/noticia/noticia.component';
import { ModalExpandirImagemComponent } from './components/modals/modal-expandir-imagem/modal-expandir-imagem.component';
import { ModalExpandirIconeComponent } from './components/modals/modal-expandir-icone/modal-expandir-icone.component';
import { BannersComponent } from './components/banners/banners.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscarItensComponent } from './components/buscar-itens/buscar-itens.component';
import { ModalExpandirItemComponent } from './components/modals/modal-expandir-item/modal-expandir-item.component';
import { PlayerStatsComponent } from './components/player-stats/player-stats.component';
import { PercentFormatPipe } from './pipes/percent-format.pipe';
import { ModePanelComponent } from './components/player-stats/mode-panel/mode-panel.component';
import { MapComponent } from './components/map/map.component';
import { ShopComponent } from './components/shop/shop.component';
import { ItemComponent } from './components/shop/item/item.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { LayoutModule } from '@angular/cdk/layout';
import { ModalExpandirItemShopComponent } from './components/modals/modal-expandir-item-shop/modal-expandir-item-shop.component';
import { BackgroundStyleDirective } from './directives/background-style.directive';
import { GenericItemComponent } from './components/modals/modal-expandir-item-shop/generic-item/generic-item.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LanguageErrorInterceptor } from './interceptors/language-error.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const formFieldDefaultOptions: MatFormFieldDefaultOptions = {
  color: 'accent',
  subscriptSizing: 'dynamic',
};

@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    NoticiaComponent,
    ModalExpandirImagemComponent,
    BannersComponent,
    ModalExpandirIconeComponent,
    BuscarItensComponent,
    ModalExpandirItemComponent,
    PlayerStatsComponent,
    PercentFormatPipe,
    ModePanelComponent,
    MapComponent,
    ShopComponent,
    ItemComponent,
    ModalExpandirItemShopComponent,
    BackgroundStyleDirective,
    GenericItemComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: formFieldDefaultOptions,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
