import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannersComponent } from './components/banners/banners.component';
import { BuscarItensComponent } from './components/buscar-itens/buscar-itens.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { PlayerStatsComponent } from './components/player-stats/player-stats.component';
import { MapComponent } from './components/map/map.component';
import { ShopComponent } from './components/shop/shop.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    pathMatch: 'full',
  },
  {
    path: 'buscar-jogador',
    component: PlayerStatsComponent,
  },
  {
    path: 'buscar-itens',
    component: BuscarItensComponent,
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
  },
  {
    path: 'mapa',
    component: MapComponent,
  },
  {
    path: 'banners',
    component: BannersComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
