import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosCasaComponent } from './videos-casa.component';

describe('VideosCasaComponent', () => {
  let component: VideosCasaComponent;
  let fixture: ComponentFixture<VideosCasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosCasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
