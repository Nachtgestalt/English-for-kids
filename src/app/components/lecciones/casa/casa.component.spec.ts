import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaComponent } from './casa.component';

describe('CasaComponent', () => {
  let component: CasaComponent;
  let fixture: ComponentFixture<CasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
