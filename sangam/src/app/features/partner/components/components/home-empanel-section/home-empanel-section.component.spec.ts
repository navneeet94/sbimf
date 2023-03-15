import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEmpanelSectionComponent } from './home-empanel-section.component';

describe('HomeEmpanelSectionComponent', () => {
  let component: HomeEmpanelSectionComponent;
  let fixture: ComponentFixture<HomeEmpanelSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEmpanelSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEmpanelSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
