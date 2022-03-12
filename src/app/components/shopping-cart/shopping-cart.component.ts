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

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.shoppingCart = this.cartService.getItems();
  }

  deleteFromCart(item: ProductModel): void {
    this.shoppingCart = [...this.cartService.deleteItemFromCart(item)];
  }
}
