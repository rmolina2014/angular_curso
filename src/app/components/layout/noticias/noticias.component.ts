import { Component, OnInit } from '@angular/core';

import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  //prueba boton
  e:any;

 

  getNoticiasPais(e: any,p:any){

       
    this._noticias.getNoticiasPaisServicio(p).subscribe({
      next:(data:any)=>{
        console.log(data);
        this.lista=data.articles;
      },
      error:(err)=>{console.log(err)},
      complete:()=>{console.log('Fin de la peticion....')}
    })
  }

// fin prueba boton

  lista:any[]=[];

  constructor(private _noticias:NoticiasService) {}
 

  ngOnInit(): void {

  this.getNoticias();
    //this.getNoticiasPeru();
    console.log('Llamar al servicio...');

  }

  getNoticias(){
    this._noticias.getNoticias().subscribe({
      next:(data:any)=>{
        console.log(data);
        this.lista=data.articles;
      },
      error:(err)=>{console.log(err)},
      complete:()=>{console.log('Fin de la peticion....')}
    })
  }

  

}
