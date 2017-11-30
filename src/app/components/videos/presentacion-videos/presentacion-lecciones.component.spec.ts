import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionLeccionesComponent } from './presentacion-lecciones.component';

describe('PresentacionLeccionesComponent', () => {
  let component: PresentacionLeccionesComponent;
  let fixture: ComponentFixture<PresentacionLeccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentacionLeccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionLeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
