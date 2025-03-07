import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalExpandirItemsComponent } from '../../modals/modal-expandir-items/modal-expandir-items.component';
import {
  IBrItemsEntity,
  ICarsEntity,
  IEntriesEntity,
  IInstrumentsEntity,
  ITracksEntity,
} from 'src/app/interfaces/shop';
import { ModalExpandirMusicaComponent } from '../../modals/modal-expandir-musica/modal-expandir-musica.component';
import { ModalExpandirCarroComponent } from '../../modals/modal-expandir-carro/modal-expandir-carro.component';
import { ModalExpandirInstrumentoComponent } from '../../modals/modal-expandir-instrumento/modal-expandir-instrumento.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item: IEntriesEntity;
  image: string;
  btnText: string;
  isMusic: boolean = false;
  isCar: boolean = false;
  isInstruments: boolean = false;
  itemTitle: string;

  constructor(private _dialog: MatDialog) {}

  ngOnInit(): void {
    if (this.item.layout?.name == 'AC Milan x PUMA x Off-White | Nimbus') {
      console.log(this.item);
    }
    if (this.item.tracks?.length) {
      this.isMusic = true;
    } else if (this.item.instruments?.length) {
      this.isInstruments = true;
    } else if (this.item.cars?.length) {
      this.isCar = true;
    }
    this.setItemTitle();
    this.setImage();
    this.setBtnText();
  }

  setItemTitle(): void {
    if (this.isMusic) {
      this.itemTitle = this.item.tracks[0].title;
    } else if (this.isCar) {
      this.itemTitle = this.item.cars[0].name;
    } else if (this.isInstruments) {
      this.itemTitle = this.item.instruments[0].name;
    } else {
      this.itemTitle =
        this.item.bundle?.name ||
        this.item.layout?.name ||
        this.item.brItems[0]?.name ||
        'Sem título';
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

  setBtnText(): void {
    this.btnText = this.item.bundle?.name ? 'Ver pacote' : 'Ver item';
  }

  expandir(item: IEntriesEntity) {
    if (item.bundle?.name) {
      this.expandirPacote(item.brItems);
    } else if (item.tracks?.length) {
      this.expandirMusica(item.tracks[0]);
    } else if (item.cars?.length) {
      this.expandirCarro(item.cars[0]);
    } else if (item.instruments?.length) {
      this.expandirInstrument(item.instruments[0]);
    } else {
      if (item.brItems?.length) {
        this.expandirPacote(item.brItems);
      } else {
        console.log('Sem nada pra mostrar', item);
      }
    }
  }

  expandirPacote(bundle: IBrItemsEntity[]): void {
    this._dialog.open(ModalExpandirItemsComponent, {
      data: bundle,
    });
  }

  expandirMusica(track: ITracksEntity) {
    this._dialog.open(ModalExpandirMusicaComponent, { data: track });
  }

  expandirCarro(car: ICarsEntity) {
    console.log(car);
    this._dialog.open(ModalExpandirCarroComponent, { data: car });
  }

  expandirInstrument(instrument: IInstrumentsEntity) {
    this._dialog.open(ModalExpandirInstrumentoComponent, { data: instrument });
  }

  getBackgroundStyle(colors: any): any {
    if (colors) {
      const gradientColors = [`#${colors.color1}`];
      if (colors.color2) {
        gradientColors.push(`#${colors.color2}`);
      }
      if (colors.color3) {
        gradientColors.push(`#${colors.color3}`);
      }
      return {
        background: `linear-gradient(to bottom, ${gradientColors.join(', ')})`,
      };
    } else {
      return {
        'background-image': `url(${this.image})`,
        'background-size': 'cover',
        'background-position': 'center',
      };
    }
  }
}
