import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiUrl = 'https://efa-gardenapp-backend.herokuapp.com/api';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }
  getProducts() {
    console.log("I'm in the getProducts method");
    return this._http.get(`${apiUrl}/product`, { headers: this.getHeaders() });
  }
  
  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}


