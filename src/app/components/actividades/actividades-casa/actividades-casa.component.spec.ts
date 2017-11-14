import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesCasaComponent } from './actividades-casa.component';

describe('ActividadesCasaComponent', () => {
  let component: ActividadesCasaComponent;
  let fixture: ComponentFixture<ActividadesCasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesCasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
