import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//un observable para monitorear lo que susede con la informacion
import { Observable } from 'rxjs'; // parte reactiva


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  baseURL:string='https://newsapi.org/v2/top-headlines?country=ar';
  appID:string='f0b1b31a4990475c9ac5629cbccd3110';

  constructor(
    private _http: HttpClient
  ) {   }

  getNoticias():Observable<any>{
    let params=new HttpParams().set('apiKey',this.appID);
 
    return this._http.get(this.baseURL,{params:params})
  }
}
