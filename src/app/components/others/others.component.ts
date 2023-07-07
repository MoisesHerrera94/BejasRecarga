import { Component, OnInit } from '@angular/core';
import { BbddService } from 'src/app/bbdd.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  constructor(private bbdd:BbddService) { }

  ngOnInit(): void {
  }

  others = this.bbdd.others

}
