import { Component, ViewChild } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  //Comunicación de Padre a Hijo por método directo (ViewChild)
  @ViewChild(HijoComponent) hijo!: HijoComponent;
  mensajeParaHijo : string = '';
  
  enviarAHijo(){
    this.hijo.hijoRecibe( this.mensajeParaHijo )
  };

  //Comunicación de Padre a hijo por @Input ( )

  mensajePadreDecoradorInput : string = 'Este mensaje es recibido por el hijo por el decorador @Input( )'
  

  //Comunicación de Hijo a Padre ( hijo envia a padre ) @Output( )

  mensajeRecibidoDeHijo : string = '';

  recibirDeHijo($event : string){
    this.mensajeRecibidoDeHijo = $event
  }
}
