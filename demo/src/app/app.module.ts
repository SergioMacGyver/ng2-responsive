import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
//import {ResponsiveModule, ResponsiveConfig, ResponsiveConfigInterface} from 'ng2-responsive';
//REMOVE
import { ResponsiveModule, ResponsiveConfig, ResponsiveConfigInterface } from './responsive';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ResponsiveModule
  ],
  declarations: [
    AppComponent
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
