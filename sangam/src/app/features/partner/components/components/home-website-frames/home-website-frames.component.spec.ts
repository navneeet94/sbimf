import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWebsiteFramesComponent } from './home-website-frames.component';

describe('HomeWebsiteFramesComponent', () => {
  let component: HomeWebsiteFramesComponent;
  let fixture: ComponentFixture<HomeWebsiteFramesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWebsiteFramesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWebsiteFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
