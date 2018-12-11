import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {path: 'sanjose', component: LocationComponent},
  {path: 'manchester', component: LocationComponent},
  {path: 'leicester', component: LocationComponent},
  {path: 'wolves', component: LocationComponent},
  {path: 'seattle', component: LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
