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

  save(e: any){console.log(e);}

// fin prueba boton

  lista:any[]=[];

  constructor(private _noticias:NoticiasService) {}
 

  ngOnInit(): void {

    this.getNoticias();
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
