import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosNumerosComponent } from './videos-numeros.component';

describe('VideosNumerosComponent', () => {
  let component: VideosNumerosComponent;
  let fixture: ComponentFixture<VideosNumerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosNumerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
