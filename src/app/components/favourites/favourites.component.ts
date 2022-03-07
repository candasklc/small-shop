import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product/product-model';
import { FavouritesService } from 'src/app/services/favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  favourites: ProductModel[] = [];

  constructor(
    private dataService: FavouritesService
  ) { }

  ngOnInit(): void {
    this.getFavouritesList();
  }
  deleteFavourite(item: ProductModel): void {
    this.favourites = this.dataService.deleteFavourite(item);
    console.log(this.favourites);
  }

  getFavouritesList(): void {
    this.favourites = this.dataService.getFavourites();
    console.log(this.favourites);
  }
}
