import { NgModule,ModuleWithProviders } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ResponsiveModule, ResponsiveConfig } from 'ng2-responsive';
//REMOVE
//import { ResponsiveModule, ResponsiveConfig } from './ng2-responsive';


let config = {
    breakPoints: {
            xs: {max: 600},
            sm: {min: 601, max: 959},
            md: {min: 960, max: 1279},
            lg: {min: 1280, max: 1919},
            xl: {min: 1920}
    },
    debounceTime: 100 // allow to debounce checking timer
};

export function ResponsiveDefinition(){ 
   return new ResponsiveConfig(config);
};

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ResponsiveModule
  ],
  declarations: [
    AppComponent
  ],
  providers:[{
         provide: ResponsiveConfig, 
         useFactory: ResponsiveDefinition }],
  bootstrap: [AppComponent]
})
export class AppModule { }
