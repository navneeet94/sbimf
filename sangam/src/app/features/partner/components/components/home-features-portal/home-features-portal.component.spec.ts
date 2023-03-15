import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeaturesPortalComponent } from './home-features-portal.component';

describe('HomeFeaturesPortalComponent', () => {
  let component: HomeFeaturesPortalComponent;
  let fixture: ComponentFixture<HomeFeaturesPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFeaturesPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFeaturesPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
