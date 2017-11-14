import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesAbecedarioComponent } from './actividades-abecedario.component';

describe('ActividadesAbecedarioComponent', () => {
  let component: ActividadesAbecedarioComponent;
  let fixture: ComponentFixture<ActividadesAbecedarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesAbecedarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesAbecedarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
