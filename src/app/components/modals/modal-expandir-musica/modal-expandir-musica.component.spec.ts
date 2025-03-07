import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExpandirMusicaComponent } from './modal-expandir-musica.component';

describe('ModalExpandirMusicaComponent', () => {
  let component: ModalExpandirMusicaComponent;
  let fixture: ComponentFixture<ModalExpandirMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExpandirMusicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExpandirMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
