import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerRoutingModule } from './partner-routing.module';
import { PartnerComponent } from './partner.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeBannerComponent } from './components/components/home-banner/home-banner.component';

@NgModule({
  declarations: [
    PartnerComponent,
    HomeComponent,
    HomeBannerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PartnerRoutingModule
  ]
})
export class PartnerModule { }
