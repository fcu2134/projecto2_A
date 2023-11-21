import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Formulario1Component } from './components/formulario1/formulario1.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Formulario2Component } from './components/formulario2/formulario2.component';
import { Servicio1Service } from './services/servicio1.service';

@NgModule({
  declarations: [
    AppComponent,
    Formulario1Component,
    Formulario2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [Servicio1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
