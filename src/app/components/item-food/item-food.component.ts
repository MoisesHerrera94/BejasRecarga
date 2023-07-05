import { Component, OnInit } from '@angular/core';
import { BbddService } from 'src/app/bbdd.service';

@Component({
  selector: 'app-item-food',
  templateUrl: './item-food.component.html',
  styleUrls: ['./item-food.component.css']
})
export class ItemFoodComponent implements OnInit {

  constructor(private bbdd:BbddService) { }

  ngOnInit(): void {
  }

  foods = this.bbdd.listaFoods;
}
