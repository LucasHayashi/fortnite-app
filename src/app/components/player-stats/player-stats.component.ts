import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, tap, map, finalize, catchError, delay } from 'rxjs';
import { IPlayerStats } from 'src/app/interfaces/player-stats';
import { ISearchPlayer } from 'src/app/interfaces/search-player';
import { FortniteService } from 'src/app/services/fortnite.service';
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

  isLoading = false;
  searchPlayer$: Observable<ISearchPlayer>;
  playerStats$: Observable<IPlayerStats>;

  limparNomeBuscado(event) {
    event.preventDefault();
    this.playerForm.get('name')?.reset('');
  }

  constructor(
    private _fortniteService: FortniteService,
    private _snackBar: MatSnackBar
  ) {}

  onSubmit() {
    if (this.playerForm.valid) {
      let name = this.playerForm.value.name;
      let platform = this.playerForm.value.platform;

      this._fortniteService.searchPlayer(name, platform).subscribe((res) => {
        if (res.result) {
          this.playerStats$ = this._fortniteService
            .getPlayerStats(res.account_id)
            .pipe(
              tap(() => (this.isLoading = true)),
              delay(500),
              catchError((error: HttpErrorResponse) => {
                let errorMessage = error.message;
                this._snackBar.open(errorMessage, 'OK', {
                  duration: 3000,
                });
                throw new Error(error.message);
              }),
              finalize(() => {
                this.isLoading = false;
              })
            );
        }
      });
    } else {
      this._snackBar.open('Corrija os dados do formulário!', 'OK', {
        duration: 1000,
      });
    }
  }
}
