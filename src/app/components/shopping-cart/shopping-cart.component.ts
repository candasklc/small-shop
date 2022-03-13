import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/models/product/product-model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public shoppingCart: ProductModel[] = [];
  public columnsToDisplay = ['buttons', 'items', 'price'];
  public total: number = 0;
  public amountOfItems = 0;
  public isTotalAmountZero = false;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems(): void {
    this.shoppingCart = this.cartService.getItems();
    this.calculate();
  }

  public deleteFromCart(item: ProductModel): void {
    this.shoppingCart = [...this.cartService.deleteItemFromCart(item)];
    this.calculate();
  }

  public calculate(): void {
    this.total = this.shoppingCart.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
    this.amountOfItems = this.shoppingCart.length;
    if (this.amountOfItems === 0) {
      this.isTotalAmountZero = true;
    }
  }
}
