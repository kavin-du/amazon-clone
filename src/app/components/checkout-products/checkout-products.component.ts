import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {

  @Input() checkout_products: any[] = [];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();

  constructor(public shopping_cart_service: ShoppingCartService) { }

  ngOnInit(): void {
    console.log('products ', this.checkout_products);
    
  }

  removeItem(p:any) {
    this.shopping_cart_service.removeItem(p);
    this.deleteEvent.emit(p);
  }


}
