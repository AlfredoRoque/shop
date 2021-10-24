import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  quantity$ = this.shopserv.quantityAction$;
  total$ = this.shopserv.totalAction$;
  cart$ = this.shopserv.cartAction$;

  constructor(private shopserv: ShoppingCartService) { }

  ngOnInit() {
  }

}
