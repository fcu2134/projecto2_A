// Importaciones de módulos y componentes de Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Servicio1Service } from 'src/app/services/servicio1.service';
import { Router } from '@angular/router'; // Asegúrate de importar el Router

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit {
  formulario1:any; // Asegúrate de que sea de tipo FormGroup
  constructor(private fb: FormBuilder, private servicio1Service: Servicio1Service, private router: Router) { }

  ngOnInit(): void {
    // Inicialización del formulario reactivo con validadores
    this.formulario1 = this.fb.group({
      campo1: ['', [Validators.required, Validators.minLength(4)]],
      campo2: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  // Getter para acceder fácilmente a los controles del formulario
  get formularioreactivo() {
    return this.formulario1.controls;
  }

  // Método para enviar datos al servicio y navegar a la página 'formulario2'
  enviardatos() {
    if (this.formulario1.valid) {
      const data = {
        campo1: this.formulario1.value.campo1,
        campo2: this.formulario1.value.campo2,
      };

      // Llamada al servicio para guardar datos
      this.servicio1Service.guardarDatos(data);

      // Navegar a la página 'formulario2' utilizando el enrutador de Angular
      this.router.navigate(['formulario2']);
    }
  }
}
