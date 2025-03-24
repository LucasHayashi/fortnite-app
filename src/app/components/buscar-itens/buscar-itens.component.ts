import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  of,
  repeat,
  switchMap,
} from 'rxjs';
import { ICosmetic } from 'src/app/interfaces/cosmetic';
import { FortniteItem } from 'src/app/models/FortniteItem';
import { FortniteService } from 'src/app/services/fortnite.service';
import { ModalExpandirItemComponent } from '../modals/modal-expandir-item/modal-expandir-item.component';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-buscar-itens',
  templateUrl: './buscar-itens.component.html',
  styleUrls: ['./buscar-itens.component.scss'],
})
export class BuscarItensComponent {
  PAUSA = 500;
  nomeDoItem: FormControl = new FormControl('');
  listaDeItens$: Observable<FortniteItem[]> = this.nomeDoItem.valueChanges.pipe(
    debounceTime(this.PAUSA),
    filter((valorDigitado) => valorDigitado.length >= 3),
    distinctUntilChanged(),
    switchMap((valorDigitado) => {
      return this._fortniteService.getItens(valorDigitado);
    }),
    map((response) => response.data ?? []),
    map((items) => this.listaDeItemsParaItem(items)),
    catchError((error: HttpErrorResponse) => {
      if (error.status === 404) {
        this._snackbarService.openSnackBar(
          this._translateService.instant('item.no_item_found')
        );
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

  getBackgroundRadial(cores: string[]): string {
    if (cores) {
      return cores.map((cor) => '#' + cor).join(', ');
    }
    return ['#1ed2eb', '#17b4dd', '#0f8ecd', '#065fb9', '#034fb1'].join(', ');
  }

  constructor(
    private _fortniteService: FortniteService,
    private _snackbarService: SnackbarService,
    private _dialog: MatDialog,
    private _translateService: TranslateService
  ) {}
}
