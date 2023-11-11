import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private datosPrimerComponente: any = {};
  private datosSegundoComponente: any = {};

  setDatosPrimerComponente(datos: any) {
    this.datosPrimerComponente = datos;
  }

  getDatosPrimerComponente() {
    return this.datosPrimerComponente;
  }

  setDatosSegundoComponente(datos: any) {
    this.datosSegundoComponente = datos;
  }

  getDatosSegundoComponente() {
    return this.datosSegundoComponente;
  }
}
