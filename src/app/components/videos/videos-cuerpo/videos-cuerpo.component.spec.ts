import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosCuerpoComponent } from './videos-cuerpo.component';

describe('VideosCuerpoComponent', () => {
  let component: VideosCuerpoComponent;
  let fixture: ComponentFixture<VideosCuerpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosCuerpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosCuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
