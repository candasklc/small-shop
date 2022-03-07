import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'src/app/components/main-page/main-page.component';
import { ShoppingCartComponent } from 'src/app/components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'my-items', component: ShoppingCartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
