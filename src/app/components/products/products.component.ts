import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  @Input() products: any[] = []; // input - expecting something from outside
  constructor(private shopping_cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToCart(p: any){
    this.shopping_cart.addProduct(p);
  }

}
