import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericItemComponent } from './generic-item.component';

describe('GenericItemComponent', () => {
  let component: GenericItemComponent;
  let fixture: ComponentFixture<GenericItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
