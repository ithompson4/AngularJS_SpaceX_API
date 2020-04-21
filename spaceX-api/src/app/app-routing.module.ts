import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RocketComponent } from './rocket/rocket.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }