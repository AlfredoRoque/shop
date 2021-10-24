import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private ApiURL = 'https://api-shop-data.herokuapp.com/products';
  constructor(private http: HttpClient) { }

  getproducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.ApiURL);
  }

  updateStock(productId:number, stock:number){
    const body = {"stock":stock};
    return this.http.patch<any>(`${this.ApiURL}/${productId}`,body);
  }

}
