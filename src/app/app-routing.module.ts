import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Formulario1Component } from './components/formulario1/formulario1.component';
import { Formulario2Component } from './components/formulario2/formulario2.component';
import { BrowserModule } from '@angular/platform-browser';
const routes: Routes = [
  { path: 'formulario', component: Formulario1Component},
  { path: 'formulario2', component: Formulario2Component}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
