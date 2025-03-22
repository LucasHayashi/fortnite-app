import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExpandirItemShopComponent } from './modal-expandir-item-shop.component';

describe('ModalExpandirItemShopComponent', () => {
  let component: ModalExpandirItemShopComponent;
  let fixture: ComponentFixture<ModalExpandirItemShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExpandirItemShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExpandirItemShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
