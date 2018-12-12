import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanjoseComponent } from './sanjose/sanjose.component';
import { ManchesterComponent } from './manchester/manchester.component';
import { LeicesterComponent } from './leicester/leicester.component';
import { WolvesComponent } from './wolves/wolves.component';
import { SeattleComponent } from './seattle/seattle.component';

const routes: Routes = [
  {path: 'sanjose', component: SanjoseComponent},
  {path: 'manchester', component: ManchesterComponent},
  {path: 'leicester', component: LeicesterComponent},
  {path: 'wolves', component: WolvesComponent},
  {path: 'seattle', component: SeattleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
