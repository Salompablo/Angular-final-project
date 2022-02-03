import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  
  /** Función para obtener productos de la API */

  getProduct(){
    return this.http.get<any>("https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products")
    .pipe(map((res:any)=>{
      return res;
    }))
}
}

