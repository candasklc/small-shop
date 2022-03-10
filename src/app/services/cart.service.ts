import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/models/product/product-model';
import { products } from 'src/assets/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productsInCart: ProductModel[] = products.filter((item) => { return item.isInCart === true });

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
