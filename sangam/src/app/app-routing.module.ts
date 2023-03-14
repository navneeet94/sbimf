import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ProjectRoute: Routes = [
  { path: '',   redirectTo: '/partner', pathMatch: 'full' },
  { path: 'partner', loadChildren: () => import('./features/partner/partner.module').then(m => m.PartnerModule)},
  { path: 'mitra', loadChildren: () => import('./features/mitra/mitra.module').then(m => m.MitraModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(ProjectRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
