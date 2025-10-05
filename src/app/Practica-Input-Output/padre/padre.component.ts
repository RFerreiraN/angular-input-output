import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  contador : number = 0;
  mensajePadre : string = 'Este es el mensaje del padre al hijo @Input()!!'
  mensajeRecibido : string = '' //@Output

  // Funciones del Contador
  incrementar(){
    this.contador++
  };
  decrementar(){
    this.contador--
  };
  resetear(){
    this.contador = 0
  };

  //Funcion(es) de @Output( )
  recibirMensaje($event : string){
    this.mensajeRecibido = $event
  }

}
