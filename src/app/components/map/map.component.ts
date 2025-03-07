import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FortniteService } from 'src/app/services/fortnite.service';
import { Observable } from 'rxjs';
import { IMap } from 'src/app/interfaces/map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  map$: Observable<IMap>;

  constructor(private _fortniteService: FortniteService) {}

  ngOnInit(): void {
    this.map$ = this._fortniteService.getMap();
  }
}
