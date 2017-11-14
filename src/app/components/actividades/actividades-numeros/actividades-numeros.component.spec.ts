import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesNumerosComponent } from './actividades-numeros.component';

describe('ActividadesNumerosComponent', () => {
  let component: ActividadesNumerosComponent;
  let fixture: ComponentFixture<ActividadesNumerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesNumerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
