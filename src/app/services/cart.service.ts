import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/models/product/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productsInCart: ProductModel[] = [
  ]

  constructor() { }

  addItemToCart(item: ProductModel): ProductModel[] {
    this.productsInCart.push(item);
    return this.productsInCart;
  }

  deleteItemFromCart(itemToDelete: ProductModel): ProductModel[] {
    const index = this.productsInCart.indexOf(itemToDelete)
    this.productsInCart.splice(index, 1);
    return this.productsInCart;
  }

  getItems(): ProductModel[] {
    return this.productsInCart;
  }
}
