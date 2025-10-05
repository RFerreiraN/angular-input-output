import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
    @Input() hijoRecibe : string = '';
    @Output() mensajeParaPadre = new EventEmitter<string>();
    @Output() incrementarDesdeHijo = new EventEmitter<void>();
    @Output() decrementarDesdeHijo = new EventEmitter<void>();
    @Output() resetearDesdeHijo = new EventEmitter<void>();
    mensaje : string = '';

    enviarMensaje(){
      this.mensajeParaPadre.emit( this.mensaje )
    }

    incrementar(){
        this.incrementarDesdeHijo.emit()
    }
    decrementar(){
        this.decrementarDesdeHijo.emit()
    }
    resetear(){
        this.resetearDesdeHijo.emit()
    }
  
  }
