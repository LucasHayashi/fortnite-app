import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Entry, Item } from 'src/app/interfaces/shop';
import { ModalExpandirItemsComponent } from '../../modals/modal-expandir-items/modal-expandir-items.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item: Entry;
  image: string;
  btnText: string;

  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.setImage();
    this.setBtnText();
  }

  setImage(): void {
    console.log(this.item)
    this.image = this.item.newDisplayAsset?.materialInstances[0]?.images?.Background;
    if (!this.image) {
      this.image = this.item?.items[0].images.icon; // Fallback
    }
  }

  setBtnText(): void {
    this.btnText = this.item.bundle?.name ? 'Ver pacote' : 'Ver item';
  }

  expandirPacote(bundle: Item[]): void {
    this._dialog.open(ModalExpandirItemsComponent, {
      data: bundle,
    });
  }
}