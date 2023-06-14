import { Component, OnInit } from '@angular/core';
import { BbddService } from 'src/app/bbdd.service';

@Component({
  selector: 'app-item-drink',
  templateUrl: './item-drink.component.html',
  styleUrls: ['./item-drink.component.css']
})
export class ItemDrinkComponent implements OnInit {

  constructor(private bbdd:BbddService) { }

  ngOnInit(): void {
  }
  
  imgUrl = this.bbdd.drinks

  bebidas = this.bbdd.listaDrinks

}
