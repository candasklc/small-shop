import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/models/product/product-model';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  public favouritesList: ProductModel[] = [
  ]

  constructor() { }

  addFavourite(item: ProductModel): ProductModel[] {
    this.favouritesList.push(item);
    return this.favouritesList;
  }

  deleteFavourite(itemToDelete: ProductModel): ProductModel[] {
    const index = this.favouritesList.indexOf(itemToDelete)
    this.favouritesList.splice(index, 1);
    return this.favouritesList;
  }

  getFavourites(): ProductModel[] {
    return this.favouritesList;
  }
}
