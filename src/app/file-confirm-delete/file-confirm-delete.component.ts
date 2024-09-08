import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-confirm-delete',
  standalone: true,
  imports: [],
  templateUrl: './file-confirm-delete.component.html',
  styleUrl: './file-confirm-delete.component.css'
})
export class FileConfirmDeleteComponent {
  @Output() salida = new EventEmitter<boolean>();

  clickBoton(respuesta:boolean){
    if(respuesta){
      this.salida.emit(true);
    }
    else{
      this.salida.emit(false);
    }
  }
}
