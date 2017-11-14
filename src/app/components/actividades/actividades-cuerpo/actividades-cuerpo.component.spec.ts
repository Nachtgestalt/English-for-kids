import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesCuerpoComponent } from './actividades-cuerpo.component';

describe('ActividadesCuerpoComponent', () => {
  let component: ActividadesCuerpoComponent;
  let fixture: ComponentFixture<ActividadesCuerpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesCuerpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesCuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
