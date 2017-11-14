import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesAnimalesComponent } from './actividades-animales.component';

describe('ActividadesAnimalesComponent', () => {
  let component: ActividadesAnimalesComponent;
  let fixture: ComponentFixture<ActividadesAnimalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesAnimalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
