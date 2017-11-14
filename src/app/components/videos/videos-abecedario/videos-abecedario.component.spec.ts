import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosAbecedarioComponent } from './videos-abecedario.component';

describe('VideosAbecedarioComponent', () => {
  let component: VideosAbecedarioComponent;
  let fixture: ComponentFixture<VideosAbecedarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosAbecedarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosAbecedarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
