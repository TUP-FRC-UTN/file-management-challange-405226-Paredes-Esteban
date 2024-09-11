import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule, NgForm, NgModel} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FileItem, FileType, FileOwner} from '../../models/file.item.model';
import { FILE_LIST, OWNERS } from '../../data/file.storage';

@Component({
  selector: 'app-new-file',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-file.component.html',
  styleUrl: './new-file.component.css'
})
export class NewFileComponent {
  @Output() salidaFile = new EventEmitter<FileItem>();
  emitFile:FileItem = {
    id:"",
    name:"",
    creation: new Date(),
    owners:[],
    type:FileType.FILE
  };
  fileType= FileType;
  fileFolders= FILE_LIST.filter(obj => {obj.type==this.fileType.FOLDER});
  fileOwners = OWNERS;
  selectedOwner:FileOwner = this.fileOwners[0];

  enviarFile(form:NgForm) {
    this.salidaFile.emit(this.emitFile);
  }

  addOwner(bool:boolean) {
    if(bool&& !this.emitFile.owners.includes(this.selectedOwner)){
      this.emitFile.owners.push(this.selectedOwner);
    }
    else if(!bool && this.emitFile.owners.includes(this.selectedOwner)){
      this.emitFile.owners.splice(this.emitFile.owners.indexOf(this.selectedOwner),1);
    }
  }

    
  volver($event: MouseEvent) {
    this.salidaFile.emit();
  }
}
