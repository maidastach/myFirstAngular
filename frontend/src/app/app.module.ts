import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { LoginComponent } from './components/login/login.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/shopping/components/header/header.component';
import { ProductsComponent } from './components/shopping/components/products/products.component';
import { CartComponent } from './components/shopping/components/cart/cart.component';
import { SingleProductComponent } from './components/shopping/components/single-product/single-product.component';
import { SingleCartComponent } from './components/shopping/components/single-cart/single-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShoppingComponent,
    ButtonComponent,
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    SingleProductComponent,
    SingleCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
