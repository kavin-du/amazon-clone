import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private _jsonURL = 'assets/data/products.json';
  private _jsonURL = 'https://fakestoreapi.com/products?limit=6';

  constructor(private Http: HttpClient) { }

  // observable like async? waiting to finish
  getJson():Observable<any> {
    return this.Http.get(this._jsonURL);
  }
}
