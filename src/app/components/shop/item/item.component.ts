import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IEntriesEntity } from 'src/app/interfaces/shop';
import { ModalExpandirItemShopComponent } from '../../modals/modal-expandir-item-shop/modal-expandir-item-shop.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item: IEntriesEntity;
  image: string;
  isMusic: boolean = false;
  isCar: boolean = false;
  isInstruments: boolean = false;
  itemTitle: string;

  constructor(private _dialog: MatDialog) {}

  ngOnInit(): void {
    if (this.item.tracks?.length) {
      this.isMusic = true;
    } else if (this.item.instruments?.length) {
      this.isInstruments = true;
    } else if (this.item.cars?.length) {
      this.isCar = true;
    }
    this.setItemTitle();
    this.setImage();
  }

  setItemTitle(): void {
    if (this.item.bundle?.name) {
      this.itemTitle = this.item.bundle.name;
    } else {
      if (this.item.brItems?.length > 0) {
        this.itemTitle = this.item.brItems[0].name;
      } else {
        if (this.isMusic) {
          this.itemTitle = this.item.tracks[0].title;
        } else if (this.isCar) {
          this.itemTitle = this.item.cars[0].name;
        } else if (this.isInstruments) {
          this.itemTitle = this.item.instruments[0].name;
        } else {
          this.itemTitle =
            this.item.layout?.name ||
            this.item.brItems[0]?.name ||
            'Sem título';
        }
      }
    }
  }

  setImage(): void {
    if (this.isMusic) {
      this.image = this.item.tracks[0]?.albumArt;
    } else if (this.isCar) {
      this.image = this.item.cars[0]?.images.small;
    } else if (this.isInstruments) {
      this.image = this.item.instruments[0].images.small;
    } else {
      this.image = this.item.newDisplayAsset?.renderImages[0]?.image;
      if (!this.image) {
        if (this.item?.brItems) {
          this.image =
            this.item?.brItems[0]?.images?.icon ||
            this.item?.brItems[0]?.images?.smallIcon;
        } else {
          console.log('sem imagem', this.item);
        }
      }
    }
  }

  expandir(item: IEntriesEntity) {
    this._dialog.open(ModalExpandirItemShopComponent, {
      data: item,
    });
  }
}
