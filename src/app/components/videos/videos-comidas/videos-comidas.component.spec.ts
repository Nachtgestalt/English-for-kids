import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosComidasComponent } from './videos-comidas.component';

describe('VideosComidasComponent', () => {
  let component: VideosComidasComponent;
  let fixture: ComponentFixture<VideosComidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosComidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosComidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
