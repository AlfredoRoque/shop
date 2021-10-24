import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent{

  quantity$ = this.shopserv.quantityAction$;
  total$ = this.shopserv.totalAction$;
  cart$ = this.shopserv.cartAction$;

  constructor(private shopserv: ShoppingCartService) { }
}
