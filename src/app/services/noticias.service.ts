import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//un observable para monitorear lo que susede con la informacion
import { Observable } from 'rxjs'; // parte reactiva


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  //baseURL:string='https://newsapi.org/v2/top-headlines?country=ar';
  //appID:string='f0b1b31a4990475c9ac5629cbccd3110';



// nueva url https://gnews.io/api/v4/search?q=example&token=API-Token
  baseURL:string='https://gnews.io/api/v4/search?q=example';
  appID:string='c48648af5e4a0df9f9920833b871a1e8';

  constructor(
    private _http: HttpClient
  ) {   }

  getNoticias():Observable<any>{
    let params=new HttpParams().set('token',this.appID);
 
    return this._http.get(this.baseURL,{params:params})
  }
}
