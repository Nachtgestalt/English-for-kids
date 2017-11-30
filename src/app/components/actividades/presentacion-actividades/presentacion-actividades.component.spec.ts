import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionActividadesComponent } from './presentacion-actividades.component';

describe('PresentacionActividadesComponent', () => {
  let component: PresentacionActividadesComponent;
  let fixture: ComponentFixture<PresentacionActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentacionActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
