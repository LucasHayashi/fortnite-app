import { Component, Input } from '@angular/core';
import { Entry } from 'src/app/interfaces/shop';

@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.scss']
})
export class BundleComponent {
  @Input() bundle : Entry;

  ngOnInit() {
    console.log(this.bundle)
  }
}
