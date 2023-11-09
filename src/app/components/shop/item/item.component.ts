import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Entry, Item } from 'src/app/interfaces/shop';
import { ModalExpandirItemsComponent } from '../../modals/modal-expandir-items/modal-expandir-items.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: Entry;

  constructor(private _dialog: MatDialog) {}

  expandirPacote(bundle: Item[]) {
    console.log(bundle);
    this._dialog.open(ModalExpandirItemsComponent, {
      data: bundle,
    });
  }
}
