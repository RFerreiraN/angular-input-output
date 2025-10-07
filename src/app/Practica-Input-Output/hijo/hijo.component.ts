import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  //Comunicación con  @Input( )
  @Input() mensajeDecoradorInput : string = '';

  /* ************************************************* */

  //Comunicación con @ViewChild( )
  mensajeDePadre : string = '';

  hijoRecibe( mensaje : string){
    this.mensajeDePadre = mensaje
  };

/* ************************************************* */

  //Comunicación con @Output( ) mensaje de hijo a padre
  @Output() mensajeParaPadreEvent= new EventEmitter<string>();
  mensajeParaPadre : string = '';

  enviarMensajeAPadre(){
    this.mensajeParaPadreEvent.emit( this.mensajeParaPadre )
  }

}
