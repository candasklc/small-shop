import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductShowCaseComponent } from './components/product-show-case/product-show-case.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductCardComponent,
    HeaderComponent,
    FooterComponent,
    ProductShowCaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
