import { Component, OnInit } from '@angular/core';

interface Cards{
  title: string
  imgUrl: string
  cardBody: string
  cardTextButton:string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  title:string="Hola desde el componente header";

  flag=true;
  cardInfo: any =[
  {
    title:"Curso de Angular",
    imgUrl:"http://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png",
    cardBody:"Bienvenido a la introducción de angular",
    cardTextButton:"Vamos a aprender"
   },
   {
    title:"Curso de JavaScript",
    imgUrl:"https://img1.freepng.es/20180720/bv/kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b13c2314.0304322315320700652463.jpg",
    cardBody:"Bienvenido a la introducción de angular",
    cardTextButton:"Vamos a aprender"
   },
   {
    title:"Curso de Python",
    imgUrl:"https://mpng.subpng.com/20180825/box/kisspng-python-programming-language-computer-programming-c-hanuman-png-transparent-images-free-download-clip-5b814ed3233799.3867698615352009791443.jpg",
    cardBody:"Bienvenido a la introducción de angular",
    cardTextButton:"Vamos a aprender"
   },
 ];

  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    this.flag=!this.flag;
  }

}
