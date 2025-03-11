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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { ModalExpandirItemsComponent } from './components/modals/modal-expandir-items/modal-expandir-items.component';
import { ModalExpandirMusicaComponent } from './components/modals/modal-expandir-musica/modal-expandir-musica.component';
import { ModalExpandirCarroComponent } from './components/modals/modal-expandir-carro/modal-expandir-carro.component';
import { ModalExpandirInstrumentoComponent } from './components/modals/modal-expandir-instrumento/modal-expandir-instrumento.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

const formFieldDefaultOptions: MatFormFieldDefaultOptions = {
  color: 'accent',
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
    ModalExpandirItemsComponent,
    ModalExpandirMusicaComponent,
    ModalExpandirCarroComponent,
    ModalExpandirInstrumentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
