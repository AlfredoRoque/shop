import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, switchMap, tap } from 'rxjs/operators';
import { DataService } from 'src/app/shared/services/data.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Details, Order } from '../products/interfaces/orderinterface';
import { Product } from '../products/interfaces/product.interface';
import { ProductService } from '../products/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  isDelivery: Boolean = true;
  stores$ = this.dataserv.getStores();
  cart: Product[] = [];
  model = {
    name: "",
    store:"",
    shippingAddress:"",
    city:""
  }
  orderId = 0;

  constructor(
    private dataserv:DataService,
    private shopcartserv:ShoppingCartService,
    private router:Router,
    private prodServ:ProductService) { }

  ngOnInit() {
    this.cartEmpty();
    this.getDataCard();
    //this.prepareDetails()
  }

  OnPickUpOnDelivery(value:Boolean){
    this.isDelivery = value;
  }

  onSubmit({value:formData}: NgForm){
    const data:Order ={
      ...formData,
      date: this.getDay(),
      pickup: this.isDelivery
    }
    this.dataserv.saveOrder(data)
    .pipe(
      tap(res=>{
        this.dataserv.getLstOrder().pipe(
          tap(res=> this.orderId = res[0].id),
          switchMap((id) =>{
            const orderId = id[0].id;
            const details = this.prepareDetails();
            return this.dataserv.saveDetails({details,orderId});
          }),
        ).subscribe();
      }),
      tap(()=>
        this.router.navigate(['/thank-page'])
      ),
      delay(2000),
      tap(()=>this.shopcartserv.cleanCart())
    )
    .subscribe()

  }

  getDay(): string{
    return new Date().toISOString();
  }

  prepareDetails():Details[]{
    const details : Details[] = [];
    this.cart.forEach((product:Product)=>{
      const {id:productId,name:productName, qty:quantity, stock} = product;
      const updateStock = (stock -quantity);
      details.push({productId,productName,quantity});
      this.prodServ.updateStock(productId,updateStock).pipe(
        tap(()=> console.log())
      ).subscribe()
    });
    return details;
  }

  getDataCard():void{
    this.shopcartserv.cartAction$
    .pipe(
      tap((products: Product[]) => this.cart = products)
    ).subscribe()
  }

  cartEmpty():void{
    this.shopcartserv.cartAction$
    .pipe(
      tap((products:Product[])=>{
        if(Array.isArray(products)&&!products.length){
          this.router.navigate(['/products']);
        }
      })
    )
    .subscribe()
  }

}
