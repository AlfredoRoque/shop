import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() addCartClick = new EventEmitter<Product>();

  constructor(private http: HttpClient) { 
    
  }
  
  ngOnInit() {
    
  }

  onClick():void{
    this.addCartClick.emit(this.product);
  }
}
