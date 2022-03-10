import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/models/product/product-model';
import { products } from 'src/assets/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productList: ProductModel[] = products;

  constructor() { }

  getProducts(): ProductModel[] {
    return this.productList;
  }
}
