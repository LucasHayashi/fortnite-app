import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { LoadingService } from './services/loading.service';
import { LanguageService } from './services/language.service';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ILanguage } from './interfaces/language';

export type LinkType = 'linkedin' | 'whatsapp' | 'github' | 'twitter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'fornite-app';
  navItems = [
    { link: '', title: 'shop.item_shop', icon: 'storefront' },
    { link: 'buscar-jogador', title: 'player.search', icon: 'sports_esports' },
    { link: 'buscar-itens', title: 'item.search_item', icon: 'search' },
    { link: 'noticias', title: 'news.news', icon: 'newspaper' },
    { link: 'mapa', title: 'map.map', icon: 'map' },
    { link: 'banners', title: 'banners.banners', icon: 'interests' },
  ];

  mode: MatDrawerMode;
  isMobile = false;
  projectUrl: string = window.location.origin;
  isLoading$ = this.loadingService.loading$;

  availableLanguages: ILanguage[] = [];
  selectedLanguageCode = '';
  private languageSubscription: Subscription | undefined;

  constructor(
    private breakpointObserver: BreakpointObserver,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public loadingService: LoadingService,
    private languageService: LanguageService,
    public translateService: TranslateService
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

    this.availableLanguages = this.languageService.getLanguages();
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      (language) => {
        this.selectedLanguageCode = language.code;
        this.translateService.use(language.code);
      }
    );
  }

  ngOnDestroy(): void {
    this.languageSubscription?.unsubscribe();
  }

  openLink(type: LinkType): void {
    const uriProject = encodeURIComponent(this.projectUrl);
    const links = {
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

  changeLanguage(languageCode: string): void {
    this.languageService.setLanguage(languageCode);
    this.translateService.use(languageCode);
  }

  onNavItemClick(drawer: MatDrawer) {
    if (this.isMobile) {
      drawer.close();
    }
  }
}
