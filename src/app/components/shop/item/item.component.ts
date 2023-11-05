import { Component, Input } from '@angular/core';
import { Entry } from 'src/app/interfaces/shop';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item: Entry;

  ngOnInit() {
    console.log(this.item);
  }
}
