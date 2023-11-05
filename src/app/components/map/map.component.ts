import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { MapService } from '../map.service';
import { Observable } from 'rxjs';
import {  Map } from 'src/app/interfaces/map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  map$: Observable<Map>;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.map$ = this.mapService.getMap();
  }
}
