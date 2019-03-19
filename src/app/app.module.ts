import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { ShibaInuModule } from './shiba-inu/shiba-inu.module';
import { NgTableModule } from './ng-table/ng-table.module';

// Delcare module before "AppRoutingModule" so the router knows how to map them

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ShibaInuModule,
    NgTableModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
