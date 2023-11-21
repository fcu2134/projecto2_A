import { Component, OnInit } from '@angular/core';
import { Servicio1Service } from 'src/app/services/servicio1.service';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit {

  datos: any;

  constructor(private servicio1Service: Servicio1Service) {}

  ngOnInit() {
    // Obtengo los datos almacenados en el servicio FormService(nombre que le quiera poner)
    this.datos = this.servicio1Service.obtenerDatos();
  }
}
