import { NgModule } from '@angular/core';
import { CommonRoutingModule } from './common-routing.module';
import { CommonComponent } from './common.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    CommonComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CommonRoutingModule
  ]
})
export class CommonModule { }
