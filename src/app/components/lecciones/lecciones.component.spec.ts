import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeccionesComponent } from './lecciones.component';

describe('LeccionesComponent', () => {
  let component: LeccionesComponent;
  let fixture: ComponentFixture<LeccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
