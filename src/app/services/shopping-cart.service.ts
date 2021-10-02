import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shopping_cart_items: any[] = [];

   constructor() { }

  addProduct = (product: any) => {
    let items = this.get_shopping_cart_items();
    if(items) {
      items.push(product);
      localStorage.setItem('shopping_cart', JSON.stringify(items));
    } else {
      this.shopping_cart_items.push(product); // dont need to create new array in global
      localStorage.setItem('shopping_cart', JSON.stringify(this.shopping_cart_items));
    }
  }

  get_shopping_cart_items = () => {
    let items = localStorage.getItem('shopping_cart');
    return items ? JSON.parse(items) : null;
    // return JSON.parse(items);
  }

  getCartLength = () => {
    let items = this.get_shopping_cart_items();
    return items ? items.length : 0;
  }

  getTotal = () => {
    let items = this.get_shopping_cart_items();
    return items?.reduce((acc:number, item:any) => acc + item.price, 0)
  }
}
