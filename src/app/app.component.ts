import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawerMode } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

export type LinkType = 'linkedin' | 'whatsapp' | 'github' | 'twitter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fornite-app';
  navItems = [
    { link: '', title: 'Shopping', icon: 'storefront' },
    { link: 'player-stats', title: 'Buscar Jogador', icon: 'sports_esports' },
    { link: 'buscar-itens', title: 'Buscar Itens', icon: 'search' },
    { link: 'noticias', title: 'Notícias', icon: 'newspaper' },
    { link: 'map', title: 'Mapa', icon: 'map' },
    { link: 'banners', title: 'Banners', icon: 'interests' },
  ];

  mode: MatDrawerMode;
  isMobile: boolean = false;
  projectUrl: string = window.location.origin;

  constructor(
    private breakpointObserver: BreakpointObserver,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    const icons = [
      { name: 'github', url: './assets/svg/icons8-github.svg' },
      { name: 'whatsapp', url: './assets/svg/icons8-whatsapp.svg' },
      { name: 'linkedin', url: './assets/svg/icons8-linkedin.svg' },
      { name: 'instagram', url: './assets/svg/icons8-instagram.svg' },
      { name: 'twitter', url: './assets/svg/icons8-twitter.svg' },
    ];

    icons.forEach((icon) => {
      iconRegistry.addSvgIcon(
        icon.name,
        sanitizer.bypassSecurityTrustResourceUrl(icon.url)
      );
    });
  }

  ngOnInit() {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((result) => {
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

  openLink(type: LinkType): void {
    let uriProject = encodeURIComponent(this.projectUrl);
    let links = {
      whatsapp: `https://api.whatsapp.com/send?text=${uriProject}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${uriProject}`,
      twitter: `https://twitter.com/intent/tweet?url=${uriProject}`,
      github: 'https://github.com/LucasHayashi/fortnite-app',
    };
    window.open(links[type]);
  }

  shareOnSocialMedia(type: LinkType): void {
    this.openLink(type);
  }
}
