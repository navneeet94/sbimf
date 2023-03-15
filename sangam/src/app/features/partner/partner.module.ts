import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PartnerRoutingModule } from './partner-routing.module';
import { PartnerComponent } from './partner.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeBannerComponent } from './components/components/home-banner/home-banner.component';
import { HomeWebsiteFramesComponent } from './components/components/home-website-frames/home-website-frames.component';
import { HomeEmpanelSectionComponent } from './components/components/home-empanel-section/home-empanel-section.component';
import { HomeFeaturesPortalComponent } from './components/components/home-features-portal/home-features-portal.component';

@NgModule({
  declarations: [
    PartnerComponent,
    HomeComponent,
    HomeBannerComponent,
    HomeWebsiteFramesComponent,
    HomeEmpanelSectionComponent,
    HomeFeaturesPortalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PartnerRoutingModule,
    NgbModule
  ]
})
export class PartnerModule { }
