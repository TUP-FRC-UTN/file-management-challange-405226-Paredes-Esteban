import { Component } from '@angular/core';
import { FILE_LIST, OWNERS } from '../../data/file.storage';
import { FileItem,FileOwner,FileType } from '../../models/file.item.model';
import { DatePipe } from '@angular/common';
import { FileConfirmDeleteComponent } from "../file-confirm-delete/file-confirm-delete.component";

@Component({
  selector: 'app-file-list',
  standalone: true,
  imports: [DatePipe, FileConfirmDeleteComponent],
  templateUrl: './file-list.component.html',
  styleUrl: './file-list.component.css'
})
export class FileListComponent {

  owners:FileOwner[] = OWNERS;
  files: FileItem[] = FILE_LIST.sort((obj1, obj2) => {
    if (obj1.type !== obj2.type) {
        if (obj1.type == FileType.FOLDER && obj2.type == FileType.FILE) {
            return -1;
        }
        if (obj1.type == FileType.FILE && obj2.type == FileType.FOLDER) {
            return 1;
        }
    }
    if (obj1.name < obj2.name) {
        return -1;
    }
    if (obj1.name > obj2.name) {
        return 1;
    }
    return 0;
  });
  tipoArchivo = FileType;
  mostrarCancel:boolean=false;
  mostrarNuevo:boolean=false;
  selectedFiles:FileItem[] = [];

  agregarItem(file:FileItem) {
    if(!this.selectedFiles.includes(file)){
      this.selectedFiles.push(file);
      console.log(this.selectedFiles);
      return;
    }
    else if(this.selectedFiles.includes(file)){
      this.selectedFiles.splice(this.selectedFiles.indexOf(file),1);
      console.log(this.selectedFiles);
      return;
    }
  }

  borrarArchivos(respuesta:boolean) {
    if(respuesta){
      for(let i =1;i<this.selectedFiles.length;i++){
        this.files.splice(this.files.indexOf(this.selectedFiles[i]),1);
      }
    }
    this.mostrarCancel=false;
  }

  mostrarMensaje() {
    this.mostrarCancel=true;
  }
  
  nuevoArchivo() {
    this.mostrarNuevo=true;
  }

  sortFiles() {  
    /*let folderPos:number[]=[];
    let filePos:number[]=[];

    for(let i:number= 0;i<this.files.length;i++){
      if(this.files[i].type==FileType.FOLDER){
        folderPos.push(i);
      }
      else{
        filePos.push(i);
      }
    }
    
    for(let i:number=0;i<this.files.length;i++){
      
    }*/
  }
}
