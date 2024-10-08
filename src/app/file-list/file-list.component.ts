import { Component } from '@angular/core';
import { FILE_LIST, OWNERS } from '../../data/file.storage';
import { FileItem,FileOwner,FileType } from '../../models/file.item.model';
import { DatePipe } from '@angular/common';
import { NewFileComponent } from '../new-file/new-file.component';

@Component({
  selector: 'app-file-list',
  standalone: true,
  imports: [DatePipe,NewFileComponent],
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

  mostrarMensaje(bool:boolean) {
    this.mostrarCancel=bool;
    if(this.selectedFiles.length==1){
      this.files.splice(this.files.indexOf(this.selectedFiles[0]),1);
      this.selectedFiles.splice(0);
    }
  }
  
  nuevoArchivo() {
    this.mostrarNuevo=true;
  }

  confirmarBorrado() {
    this.selectedFiles.forEach(selectedFile => {
      this.files.splice(this.files.indexOf(selectedFile),1);
    });
    this.selectedFiles.splice(0);
  }

  recibirFile(file:FileItem) {
    if(file.name!=""){
      this.files.push(file);
    }
    this.mostrarNuevo=false;
  }

  /*sortFiles() {  
    let folderPos:number[]=[];
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
      
    }
  }*/
}
