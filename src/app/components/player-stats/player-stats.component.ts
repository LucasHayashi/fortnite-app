import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, catchError, of, tap } from 'rxjs';
import { IPlayerStats } from 'src/app/interfaces/player-stats';
import { ISearchPlayer } from 'src/app/interfaces/search-player';
import { FortniteService } from 'src/app/services/fortnite.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TPlatform } from 'src/app/types/platform';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss'],
})
export class PlayerStatsComponent {
  playerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    platform: new FormControl<TPlatform>('epic'),
  });

  searchPlayer$: Observable<ISearchPlayer>;
  playerStats$: Observable<IPlayerStats>;
  @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;

  constructor(
    private _fortniteService: FortniteService,
    private _snackBarService: SnackbarService
  ) {}

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.playerForm.valid) {
      const name = this.playerForm.value.name;
      const platform = this.playerForm.value.platform;

      this._fortniteService.searchPlayer(name, platform).subscribe((res) => {
        if (res.result) {
          this.playerStats$ = this._fortniteService
            .getPlayerStats(res.account_id)
            .pipe(
              tap((response) => {
                if (
                  response &&
                  typeof response === 'object' &&
                  'result' in response &&
                  response.result === false
                ) {
                  this._snackBarService.openSnackBar(
                    'A conta deste jogador é privada'
                  );
                  this.nameInput.nativeElement.focus();
                  this.playerStats$ = of(null);
                }
              }),
              catchError((error: HttpErrorResponse) => {
                const errorMessage = error.message;
                this._snackBarService.openSnackBar(errorMessage);
                throw new Error(error.message);
              })
            );
        } else {
          this._snackBarService.openSnackBar('Nenhum jogador encontrado!');
          this.nameInput.nativeElement.focus();
        }
      });
    } else {
      this._snackBarService.openSnackBar(
        'Preencha todas informações do formulário'
      );
    }
  }

  limparJogadorBuscado() {
    this.playerForm.get('name').reset('');
  }
}
