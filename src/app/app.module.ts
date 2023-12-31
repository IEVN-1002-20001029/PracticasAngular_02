import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemperaturaComponent } from './Practicas/temperatura/temperatura.component';

import { FormsModule } from '@angular/forms';
import { MultiplicacionComponent } from './Practicas/multiplicacion/multiplicacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { CinepolisComponent } from './Practicas/cinepolis/cinepolis.component';
import { MenuComponent } from './menu/menu/menu.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DatosPersoanlesComponent } from './Practicas/datos-persoanles/datos-persoanles.component';
import { ExamenComponent } from './Practicas/examen/examen.component';
import { ResultadosComponent } from './Practicas/resultados/resultados.component';
import { DataSharingService } from './data-sharing.service';




@NgModule({
  declarations: [
    AppComponent,
    TemperaturaComponent,
    MultiplicacionComponent,
    CinepolisComponent,
    MenuComponent,
    DatosPersoanlesComponent,
    ExamenComponent,
    ResultadosComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,


  ],
  exports:[
    DatosPersoanlesComponent,
    ResultadosComponent
  ],

  providers: [DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
