import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IBanners } from 'src/app/interfaces/banners';
import { ModalExpandirIconeComponent } from '../modals/modal-expandir-icone/modal-expandir-icone.component';
import { PageEvent } from '@angular/material/paginator';
import { FortniteService } from 'src/app/services/fortnite.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss'],
})
export class BannersComponent {
  banners: Array<IBanners> = [];
  currentBannerList: Array<IBanners>;
  showFirstLastButtons: boolean = true;
  pageSize: number = 30;
  pageIndex: number = 0;
  pageSizeOptions = [30, 40, 60, 80, 100];
  pageEvent: PageEvent;

  constructor(
    private _fortniteService: FortniteService,
    private dialog: MatDialog,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this._fortniteService.getBanners().subscribe((data) => {
      this.banners = data;
      this.currentBannerList = this.banners.slice(0, 30);
    });

    this.dialog.afterOpened.subscribe((data) => {
      let img = new Image();
      img.src = data.componentInstance.data.images.icon;
      img.onload = function (event: any) {
        let root: HTMLStyleElement | null = document.querySelector(':root');
        let loadedImage = event.currentTarget;
        let width = loadedImage.width;
        root?.style.setProperty('--descriptionSize', width + 'px');
      };
    });
  }

  handlePageEvent(e: PageEvent) {
    this.loadingService.show();
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.banners.length);
    this.currentBannerList = this.banners.slice(startIndex, endIndex);
    setTimeout(() => {
      this.loadingService.hide();
    }, 300);
  }

  expandirIcone(data: any) {
    this.dialog.open(ModalExpandirIconeComponent, {
      data,
    });
  }
}
