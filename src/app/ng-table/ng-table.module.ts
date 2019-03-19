import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { NgTableRoutingModule } from './ng-table-routing.module';
import { MaterialTableComponent } from './material-table/material-table.component';

@NgModule({
  declarations: [MaterialTableComponent],
  imports: [
    CommonModule,
    NgMaterialModule,
    NgTableRoutingModule,
  ]
})
export class NgTableModule { }
