import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NoticiasComponent } from './noticias/noticias.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NoticiasComponent
  ],
  exports:[
   HeaderComponent,
   FooterComponent,
   NoticiasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
