import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  finalize,
  map,
  of,
  repeat,
  switchMap,
  tap,
} from 'rxjs';
import { ICosmetic } from 'src/app/interfaces/cosmetic';
import { FortniteItem } from 'src/app/models/FortniteItem';
import { FortniteService } from 'src/app/services/fortnite.service';
import { ModalExpandirItemComponent } from '../modals/modal-expandir-item/modal-expandir-item.component';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-buscar-itens',
  templateUrl: './buscar-itens.component.html',
  styleUrls: ['./buscar-itens.component.scss'],
})
export class BuscarItensComponent {
  PAUSA = 500;
  nomeDoItem: FormControl = new FormControl('');
  listaDeItens$ = this.nomeDoItem.valueChanges.pipe(
    debounceTime(this.PAUSA),
    filter((valorDigitado) => valorDigitado.length >= 3),
    distinctUntilChanged(),
    switchMap((valorDigitado) => {
      return this._fortniteService.getItens(valorDigitado);
    }),
    map((response) => response.data ?? []),
    map((items) => this.listaDeItemsParaItem(items)),
    catchError((error: HttpErrorResponse) => {
      if (error.status === 404 || error.status === 500) {
        this._snackbarService.openSnackBar('Nenhum item encontrado');
        return of([]);
      } else {
        throw new Error(error.message);
      }
    }),
    repeat()
  );

  limparItemBuscado() {
    this.nomeDoItem.reset('');
  }

  listaDeItemsParaItem(items: ICosmetic[]): FortniteItem[] {
    return items.map((item) => {
      return new FortniteItem(item);
    });
  }

  expandirItem(item: ICosmetic) {
    this._dialog.open(ModalExpandirItemComponent, {
      data: item,
    });
  }

  getBackgroundRadial(cores: any): string {
    if (cores) {
      return cores.map((cor, idx) => '#' + cor).join(', ');
    }
    return ['#1ed2eb', '#17b4dd', '#0f8ecd', '#065fb9', '#034fb1'].join(', ');
  }

  constructor(
    private _fortniteService: FortniteService,
    private _snackbarService: SnackbarService,
    private _dialog: MatDialog
  ) {}
}
