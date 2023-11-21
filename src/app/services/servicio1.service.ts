import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {
  private datos: any = {}; // el me pregunta si quiero(inicio como vacio)

  constructor() {}

  guardarDatos(data: any) {
    this.datos = data; // te recibo las manzanas que me diste 
  }

  obtenerDatos() {
    return this.datos; // te doy las manzanas que me diste 
  }
}
