import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesSaludosComponent } from './actividades-saludos.component';

describe('ActividadesSaludosComponent', () => {
  let component: ActividadesSaludosComponent;
  let fixture: ComponentFixture<ActividadesSaludosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesSaludosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesSaludosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
