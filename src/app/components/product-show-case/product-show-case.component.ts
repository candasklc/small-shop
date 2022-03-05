import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product/product-model';

@Component({
  selector: 'app-product-show-case',
  templateUrl: './product-show-case.component.html',
  styleUrls: ['./product-show-case.component.scss']
})
export class ProductShowCaseComponent implements OnInit {
  public exampleProductList: ProductModel[] = [
    {
      id: 1,
      title: 'Product Title',
      count: Math.floor(Math.random() * 40),
      description: 'This section describes the product.'
    },
    {
      id: 2,
      title: 'Product Title',
      count: Math.floor(Math.random() * 40),
      description: 'This section describes the product.'
    },
    {
      id: 3,
      title: 'Product Title',
      count: Math.floor(Math.random() * 40),
      description: 'This section describes the product.'
    },
    {
      id: 4,
      title: 'Product Title',
      count: Math.floor(Math.random() * 40),
      description: 'This section describes the product.'
    },
    {
      id: 5,
      title: 'Product Title',
      count: Math.floor(Math.random() * 40),
      description: 'This section describes the product.'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
