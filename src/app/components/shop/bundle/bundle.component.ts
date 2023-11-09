import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Entry, Item } from 'src/app/interfaces/shop';
import { ModalExpandirItemsComponent } from '../../modals/modal-expandir-items/modal-expandir-items.component';

@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.scss']
})
export class BundleComponent {
  @Input() bundle: Entry;

  constructor(private _dialog: MatDialog) { }

  expandirPacote(bundle: Item[]) {
    console.log(bundle);
    this._dialog.open(ModalExpandirItemsComponent, {
      data: bundle
    })
  }
}
