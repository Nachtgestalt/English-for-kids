import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesColoresComponent } from './actividades-colores.component';

describe('ActividadesColoresComponent', () => {
  let component: ActividadesColoresComponent;
  let fixture: ComponentFixture<ActividadesColoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesColoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
