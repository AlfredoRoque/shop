import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import {tap} from 'rxjs/operators';
import { Product } from './interfaces/product.interface';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private prser:ProductService, private shopserv:ShoppingCartService) { }

  ngOnInit() {
    this.prser.getproducts().pipe(
      tap((products:Product[]) => this.products = products)
    ).subscribe();
  }

  addCart(product):void{
    this.shopserv.updateCart(product);
  }

}
