import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosColoresComponent } from './videos-colores.component';

describe('VideosColoresComponent', () => {
  let component: VideosColoresComponent;
  let fixture: ComponentFixture<VideosColoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosColoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
