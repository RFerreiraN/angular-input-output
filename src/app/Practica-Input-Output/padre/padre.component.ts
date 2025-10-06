import { Component, ViewChild } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  //@Input()
  @ViewChild(HijoComponent) hijo!: HijoComponent;
  
  mensajeParaHijo : string = ''
  mensajeInputParaHijo : string = 'Hola Hijo';
  enviarAHijo(){
    this.hijo.recibeMensaje(this.mensajeParaHijo)
  }
  
  //@Output()

  mensajeRecibidoDeHijo : string = '';

  mensajeARecibir($event : string){
    this.mensajeRecibidoDeHijo = $event
  }
  
  
}
