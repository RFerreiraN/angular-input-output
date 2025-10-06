import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() mensajeRecibidoDePadre : string = '';
  @Output() mensajeEnviadoAPadre = new EventEmitter<string>();

  mensajeViewChild : string = '';
  mensajeInputText : string = '';

  recibeMensaje( mensaje : string){
      this.mensajeViewChild = mensaje
  }

  enviarMensajeAPadre(){
    this.mensajeEnviadoAPadre.emit( this.mensajeInputText )
  }


}
