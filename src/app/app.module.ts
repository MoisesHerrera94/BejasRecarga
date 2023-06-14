import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { BeersComponent } from './components/beers/beers.component';
import { ItemDrinkComponent } from './components/item-drink/item-drink.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    DrinksComponent,
    BeersComponent,
    ItemDrinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
