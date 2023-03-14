import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MitraRoutingModule } from './mitra-routing.module';
import { MitraComponent } from './mitra.component';


@NgModule({
  declarations: [
    MitraComponent
  ],
  imports: [
    CommonModule,
    MitraRoutingModule
  ]
})
export class MitraModule { }
