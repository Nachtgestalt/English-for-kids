import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosSaludosComponent } from './videos-saludos.component';

describe('VideosSaludosComponent', () => {
  let component: VideosSaludosComponent;
  let fixture: ComponentFixture<VideosSaludosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosSaludosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosSaludosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
