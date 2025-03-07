import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExpandirCarroComponent } from './modal-expandir-carro.component';

describe('ModalExpandirCarroComponent', () => {
  let component: ModalExpandirCarroComponent;
  let fixture: ComponentFixture<ModalExpandirCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExpandirCarroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExpandirCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
