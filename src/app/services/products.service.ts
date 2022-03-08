import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/models/product/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productList: ProductModel[] = [
    {
      id: 1,
      title: 'Product Title',
      count: Math.floor(Math.random() * 40),
      description: 'This section describes the product.',
      isFavourite: false,
      isInCart: false
    },
    {
      id: 2,
      title: 'Product Title',
      count: Math.floor(Math.random() * 40),
      description: 'This section describes the product.',
      isFavourite: false,
      isInCart: false
    },
    {
      id: 3,
      title: 'Product Title',
      count: Math.floor(Math.random() * 40),
      description: 'This section describes the product.',
      isFavourite: false,
      isInCart: false
    },
    {
      id: 4,
      title: 'Product Title',
      count: Math.floor(Math.random() * 40),
      description: 'This section describes the product.',
      isFavourite: false,
      isInCart: false
    },
    {
      id: 5,
      title: 'Product Title',
      count: Math.floor(Math.random() * 40),
      description: 'This section describes the product.',
      isFavourite: false,
      isInCart: false
    },
    {
      id: 6,
      title: 'Product Title',
      count: Math.floor(Math.random() * 40),
      description: 'This section describes the product.',
      isFavourite: false,
      isInCart: false
    },
    {
      id: 7,
      title: 'Product Title',
      count: Math.floor(Math.random() * 40),
      description: 'This section describes the product.',
      isFavourite: false,
      isInCart: false
    },
    {
      id: 8,
      title: 'Product Title',
      count: Math.floor(Math.random() * 40),
      description: 'This section describes the product.',
      isFavourite: false,
      isInCart: false
    },
    {
      id: 9,
      title: 'Product Title',
      count: Math.floor(Math.random() * 40),
      description: 'This section describes the product.',
      isFavourite: false,
      isInCart: false
    },
    {
      id: 10,
      title: 'Product Title',
      count: Math.floor(Math.random() * 40),
      description: 'This section describes the product.',
      isFavourite: false,
      isInCart: false
    },
  ]

  constructor() { }

  getProducts(): ProductModel[] {
    return this.productList;
  }
}
