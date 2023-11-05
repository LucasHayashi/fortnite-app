import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannersComponent } from './components/banners/banners.component';
import { BuscarItensComponent } from './components/buscar-itens/buscar-itens.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { PlayerStatsComponent } from './components/player-stats/player-stats.component';
import { MapComponent } from './components/map/map.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    pathMatch: 'full'
  },
  {
    path: 'player-stats',
    component: PlayerStatsComponent,
    pathMatch: 'full'
  },
  {
    path: 'buscar-itens',
    component: BuscarItensComponent,
    pathMatch: 'full'
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
    pathMatch: "full"
  },
  {
    path: 'map',
    component: MapComponent,
    pathMatch: "full"
  },
  {
    path: 'banners',
    component: BannersComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
