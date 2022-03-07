import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product/product-model';
import { FavouritesService } from 'src/app/services/favourites.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public shoppingCart: ProductModel[] = []
  constructor(
    private favourites: FavouritesService
  ) { }

  ngOnInit(): void {
  }
  getItems(): void {
    this.favourites.getFavourites();
  }

}
