import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pList } from '../productList';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private _url: string = "../assets/json/product.json"
  constructor(private http: HttpClient) { }

  getProductList(): Observable<pList[]>{
    return  this.http.get<pList[]>(this._url);

  }
}
