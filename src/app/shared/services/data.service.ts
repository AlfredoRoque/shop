import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsOrder, Order } from 'src/app/pages/products/interfaces/orderinterface';
import { lastOrder, Store } from 'src/app/pages/products/interfaces/store.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiURL = "https://api-shop-data.herokuapp.com"
  constructor(private http:HttpClient) { }

  public getStores(): Observable<Store[]>{
    return this.http.get<Store[]>(`${this.apiURL}/stores`);
  }

  public getLstOrder(): Observable<lastOrder>{
    return this.http.get<lastOrder>(`${this.apiURL}/lastOrder`);
  }

  public saveOrder(order:Order): Observable<Order>{
    return this.http.post<Order>(`${this.apiURL}/orders`,order);
  }

  public saveDetails(details:DetailsOrder): Observable<DetailsOrder>{
    return this.http.post<DetailsOrder>(`${this.apiURL}/detailsOrders`,details);
  }

}
