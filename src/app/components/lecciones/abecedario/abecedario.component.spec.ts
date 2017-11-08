import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbecedarioComponent } from './abecedario.component';

describe('AbecedarioComponent', () => {
  let component: AbecedarioComponent;
  let fixture: ComponentFixture<AbecedarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbecedarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbecedarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
