import { Component, Input } from '@angular/core';
import { Overall } from 'src/app/interfaces/stats';

@Component({
  selector: 'app-mode-panel',
  templateUrl: './mode-panel.component.html',
  styleUrls: ['./mode-panel.component.scss']
})
export class ModePanelComponent {
  @Input() playerStats: Overall | any;
  @Input() playerMode: string;
  @Input() expanded: boolean = false;
}