import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  currentFileUploadTemp: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  selectFile(event) {


    this.selectedFiles = event.target.files;
    console.log(event);
    this.currentFileUploadTemp = this.selectedFiles.item(0);
    console.log(this.currentFileUploadTemp.name);
    console.log(this.currentFileUploadTemp.size);
    console.log(this.currentFileUploadTemp.type);

    var descNOME = this.currentFileUploadTemp.name;
    var descTAMANHO = this.currentFileUploadTemp.size;
    var descTIPO = this.currentFileUploadTemp.type;

    var desc = "NOME : "+descNOME+"<br /> TAMANHO : "+descTAMANHO+" <br />TIPO : "+descTIPO;



    if(descTIPO == "application/pdf" && descTAMANHO < 10000100){
      document.getElementById('descriptionsFile').style.display = 'block';
      document.getElementById('descriptionsFile').innerHTML = desc;
      document.getElementById('msgErro').style.display = 'none';
      document.getElementById('bt').style.display = 'block';

    }else{


      document.getElementById('bt').style.display = 'none';
      document.getElementById('descriptionsFile').style.display = 'none';
      document.getElementById('msgErro').style.display = 'block';
      document.getElementById('msgErro').innerHTML = desc+" <br /> <br /> <br />ERRO ao Enviar o arquivo! Pois é do tipo invalido ou ultrapassa o tamanho máximo permitido.";

    }


  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
  }

}
