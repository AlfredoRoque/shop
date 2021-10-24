import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/pages/products/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  products: Product[] = [];

  private cartSubject = new BehaviorSubject<Product[]>([]);
  private totalSubject = new BehaviorSubject<number>(0);
  private quantitySubject = new BehaviorSubject<number>(0);

  get totalAction$(): Observable<number>{
    return this.totalSubject.asObservable();
  }
  get cartAction$(): Observable<Product[]>{
    return this.cartSubject.asObservable();
  }
  get quantityAction$(): Observable<number>{
    return this.quantitySubject.asObservable();
  }

  updateCart(product:Product){
    this.addCart(product);
    this.calcQuantity();
    this.calcTotal();
  }
  

  cleanCart():void{
    this.cartSubject.next([]);
    this.quantitySubject.next(0);
    this.totalSubject.next(0);
    this.products = [];
  }

  private addCart(product:Product):void {
    const isProductInCart = this.products.find(({id}) => id===product.id);
    if(isProductInCart){
      isProductInCart.qty += 1;
    }else{
      this.products.push({ ...product, qty:1});
    }
    this.cartSubject.next(this.products);
  }

  private calcQuantity():void {
    const quanti = this.products.reduce((acc, prod) => acc += prod.qty,0);
    this.quantitySubject.next(quanti);
  }

  private calcTotal():void {
    const total = this.products.reduce((acc, prod) => acc += (prod.price * prod.qty),0);
    this.totalSubject.next(total);
  }

}
