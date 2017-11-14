import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesComidasComponent } from './actividades-comidas.component';

describe('ActividadesComidasComponent', () => {
  let component: ActividadesComidasComponent;
  let fixture: ComponentFixture<ActividadesComidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesComidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesComidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
