import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  contador : number = 0;
  incrementar(){
    this.contador++
  };
  decrementar(){
    this.contador--
  };
  resetear(){
    this.contador = 0
  };
  mensajePadre : string = 'Este es el mensaje del padre al hijo!!'

}
