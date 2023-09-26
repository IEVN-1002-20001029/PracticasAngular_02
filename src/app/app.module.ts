import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemperaturaComponent } from './Practicas/temperatura/temperatura.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TemperaturaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
