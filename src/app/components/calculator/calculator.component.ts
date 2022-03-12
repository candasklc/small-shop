import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductModel } from 'src/app/models/product/product-model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnChanges {
  @Input() shoppingCart: ProductModel[] = [];
  public total: number = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculate();
  }

  public calculate(): void {
    this.total = this.shoppingCart.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
  }
}

