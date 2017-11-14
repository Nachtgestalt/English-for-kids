import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosAnimalesComponent } from './videos-animales.component';

describe('VideosAnimalesComponent', () => {
  let component: VideosAnimalesComponent;
  let fixture: ComponentFixture<VideosAnimalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosAnimalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
