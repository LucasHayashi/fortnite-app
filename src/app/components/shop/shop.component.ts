import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { Observable } from 'rxjs';
import { Shop } from 'src/app/interfaces/shop';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  constructor(private shopService: ShopService ) {}
  
  shop$: Observable<Shop>;

  ngOnInit(): void {
    this.shop$ = this.shopService.getShop();
  }
}
