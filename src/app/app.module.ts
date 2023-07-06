import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { BeersComponent } from './components/beers/beers.component';
import { ItemDrinkComponent } from './components/item-drink/item-drink.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ItemFoodComponent } from './components/item-food/item-food.component';
import { FoodComponent } from './components/food/food.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    DrinksComponent,
    BeersComponent,
    ItemDrinkComponent,
    NavBarComponent,
    ItemFoodComponent,
    FoodComponent,
    HeaderComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
