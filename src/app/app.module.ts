import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './Practica-Input-Output/padre/padre.component';
import { HijoComponent } from './Practica-Input-Output/hijo/hijo.component';


@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
