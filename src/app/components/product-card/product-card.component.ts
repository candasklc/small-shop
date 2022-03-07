import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product/product-model';
import { FavouritesService } from 'src/app/services/favourites.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() products: ProductModel[] = [];
  constructor(
    private favouriteService: FavouritesService,
  ) { }

  ngOnInit(): void {
  }


  addFavourite(item: ProductModel): void {
    const x = this.favouriteService.addFavourite(item);
    console.log(x);
  }
}


