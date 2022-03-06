import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product/product-model';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-show-case',
  templateUrl: './product-show-case.component.html',
  styleUrls: ['./product-show-case.component.scss']
})
export class ProductShowCaseComponent implements OnInit {
  public products: ProductModel[] = [];
  constructor(
    private dataService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void {
    this.products = this.dataService.getProducts();
  }
}
