import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialTableComponent } from './material-table/material-table.component';

const routes: Routes = [
  {
    path: 'material-table',
    component: MaterialTableComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgTableRoutingModule { }
