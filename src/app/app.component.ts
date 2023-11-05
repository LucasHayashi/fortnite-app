import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fornite-app';
  navItems = [
    { link: '', title: 'Shopping', icon: 'storefront' },
    { link: 'player-stats', title: 'Buscar Jogador', icon: 'sports_esports' },
    { link: 'buscar-itens', title: 'Buscar Itens', icon: 'search' },
    { link: 'noticias', title: 'Notícias', icon: 'newspaper' },
    { link: 'map', title: 'Mapa', icon: 'map' },
    { link: 'banners', title: 'Banners', icon: 'interests'},
  ]

  mode: MatDrawerMode;
  isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe(result => {
      if (result.matches) {
        // Dispositivo móvel
        this.mode = 'over';
        this.isMobile = true;
      } else {
        // Dispositivo desktop ou tablet
        this.mode = 'side';
        this.isMobile = false;
      }
    });
  }
}
