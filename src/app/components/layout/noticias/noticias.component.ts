import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  lista:any[]=[];

  constructor(private _noticias:NoticiasService) {}

  ngOnInit(): void {

    this.getNoticias();
    console.log('llamda al servicio');


  }

  getNoticias(){
    this._noticias.getNoticias().subscribe({
      next:(data:any)=>{
        console.log(data);
        this.lista=data;

      },
      error:(err)=>{console.log(err)},
      complete:()=>{console.log('petion termino---')}
    })
  }

}