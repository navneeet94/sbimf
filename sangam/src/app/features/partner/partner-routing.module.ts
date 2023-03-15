import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PartnerComponent } from './partner.component';

const routes: Routes = [
  {
    path:'', component: PartnerComponent,
    children:[
      {path:'',component: HomeComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerRoutingModule { }
