import { Component, OnInit } from '@angular/core';
import { BbddService } from 'src/app/bbdd.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    

  constructor(private bbdd:BbddService) { }

  ngOnInit(): void {
  }

  beers = this.bbdd.beers


}
