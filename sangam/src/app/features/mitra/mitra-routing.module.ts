import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MitraComponent } from './mitra.component';

const routes: Routes = [
  {path:'', component: MitraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MitraRoutingModule { }
