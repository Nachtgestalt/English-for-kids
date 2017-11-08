import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosComponent } from './numeros.component';

describe('NumerosComponent', () => {
  let component: NumerosComponent;
  let fixture: ComponentFixture<NumerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
