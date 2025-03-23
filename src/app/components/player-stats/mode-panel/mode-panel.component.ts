import { Component, Input } from '@angular/core';
import { IDuoOrTrioOrSquadOrSolo } from 'src/app/interfaces/player-stats';

@Component({
  selector: 'app-mode-panel',
  templateUrl: './mode-panel.component.html',
  styleUrls: ['./mode-panel.component.scss'],
})
export class ModePanelComponent {
  @Input() playerStats: IDuoOrTrioOrSquadOrSolo;
  @Input() playerMode: string;
  @Input() expanded = false;
}
