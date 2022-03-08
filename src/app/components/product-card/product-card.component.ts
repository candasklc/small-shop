import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product/product-model';
import { CartService } from 'src/app/services/cart.service';
import { FavouritesService } from 'src/app/services/favourites.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() products: ProductModel[] = [];

  public isFavourite = false;
  public favouriteColor = '';
  public isInCart = false;

  constructor(
    private favouriteService: FavouritesService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  addFavourite(item: ProductModel): void {
    if (item.isFavourite === false) {
      this.favouriteService.addFavourite(item);
      item.isFavourite = true;
    } else {
      this.favouriteService.deleteFavourite(item);
      item.isFavourite = false;
    }

  }

  addToCart(item: ProductModel): void {
    if (item.isInCart === false) {
      this.cartService.addItemToCart(item);
      item.isInCart = true;
    } else {
      this.cartService.deleteItemFromCart(item);
      item.isInCart = false;
    }
  }
}


