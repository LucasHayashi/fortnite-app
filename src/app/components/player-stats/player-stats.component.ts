import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, tap, map, finalize, catchError, of, delay } from 'rxjs';
import { Stats } from 'src/app/interfaces/stats';
import { PlayerStatsService } from '../player-stats.service';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss']
})
export class PlayerStatsComponent {
  playerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    accountType: new FormControl('epic')
  })

  isLoading = false;
  playerStats$: Observable<Stats>;

  limparNomeBuscado(event) {
    event.preventDefault();
    this.playerForm.get('name')?.reset('');
  }

  constructor(private _playerStats: PlayerStatsService, private _snackBar: MatSnackBar) { }

  onSubmit() {
    if (this.playerForm.valid) {
      let name = this.playerForm.value.name;
      let accountType = this.playerForm.value.accountType;

      this.playerStats$ = this._playerStats.getPlayerStats(name, accountType).pipe(
        tap(() => this.isLoading = true),
        delay(500),
        map((res) => res.data),
        catchError((error: HttpErrorResponse) => {
          this._snackBar.open("Nenhum jogador encontrado", "OK", {
            duration: 1000,
          })
          throw new Error(error.message);
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
    }else {
      this._snackBar.open("Corrija os dados do formulário!", "OK", {
        duration: 1000,
      })
    }
  }
}