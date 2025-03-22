import { Component, Input } from '@angular/core';
import { IColors, IGenericItem } from 'src/app/interfaces/shop';

@Component({
  selector: 'app-generic-item',
  templateUrl: './generic-item.component.html',
  styleUrls: ['./generic-item.component.scss'],
})
export class GenericItemComponent {
  @Input() item: IGenericItem;
  @Input() colors: IColors;
}
