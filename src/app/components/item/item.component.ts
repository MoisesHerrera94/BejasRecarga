import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  beers = [
    {
      bebida:"BELGIAM BITTER", 
      descripcion:"AA 4.5% - IBU 30", 
      detalle:"Estilo Belga, ligera seca, perfumada con bastante lúpulo.", 
      precioPinta:200, 
      precio500ml:500, 
      precio1Lt:700, 
      precio2Lt:1000
    }, 
    {
      bebida:"PALE ALE", 
      descripcion:"AA 5,5% - IBU 20", 
      detalle:"Rubia con amargor medio, espuma liviana. Estilo Inglés, clásico.", 
      precioPinta:200, 
      precio500ml:500, 
      precio1Lt:700, 
      precio2Lt:1200
    },
    {
      bebida:"APA", 
      descripcion:"AA 5,5% - IBU 35", 
      detalle:"Desarrollada a base de Pale Ale se desarrolla la Pale americana incorporando lúpulos de esa región con características muy particulares, como el aroma cítrico.", 
      precioPinta:200, 
      precio500ml:500, 
      precio1Lt:700, 
      precio2Lt:1200
    }
  ];
    

  constructor() { }

  ngOnInit(): void {
  }

}
