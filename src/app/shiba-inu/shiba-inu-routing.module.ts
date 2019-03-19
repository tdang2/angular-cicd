import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShibaComponent } from './shiba/shiba.component';

const routes: Routes = [
  {
    path: 'home',
    component: ShibaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShibaInuRoutingModule { }
