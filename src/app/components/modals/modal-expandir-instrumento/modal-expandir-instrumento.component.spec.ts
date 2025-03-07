import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExpandirInstrumentoComponent } from './modal-expandir-instrumento.component';

describe('ModalExpandirInstrumentoComponent', () => {
  let component: ModalExpandirInstrumentoComponent;
  let fixture: ComponentFixture<ModalExpandirInstrumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExpandirInstrumentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExpandirInstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
