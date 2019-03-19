import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { ShibaInuRoutingModule } from './shiba-inu-routing.module';
import { ShibaComponent } from './shiba/shiba.component';

@NgModule({
  declarations: [ShibaComponent],
  imports: [
    CommonModule,
    NgMaterialModule,
    ShibaInuRoutingModule
  ]
})
export class ShibaInuModule { }
