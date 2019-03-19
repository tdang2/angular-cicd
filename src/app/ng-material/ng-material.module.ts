import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonModule,
    MatTableModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class NgMaterialModule { }
