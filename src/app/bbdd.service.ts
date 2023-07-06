import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BbddService {

  constructor() { }

   public beers= [
    {name:"BELGIAN BITTER",
    aa:"4.5",
    ibu:"30",
    detail:"Estilo Belga, ligera seca, perfumada con bastante lúpul.",
    price:"900"
    },
    {name:"pale ale",
    aa:"5.5",
    ibu:"20",
    detail:"Rubia con amargos medio, espuma liviana. Estilo Ingles, clásico.",
    price:"900"
    },
    {name:"APA",
    aa:"5.5",
    ibu:"35",
    detail:"Desarrollada a base de Pale Ale, se desarrolla la Pale americana incorporando lúpulos de esa región con caracteristicas muy particulares, como de aroma citrico.",
    price:"900"
    },
    {name:"HONNEY",
    aa:"6.5",
    ibu:"15",
    detail:"Rubia suave, con agregado de miel que le suma suavidad en la boca y alcohol.",
    price:"900"
    },
    {name:"IPA",
    aa:"5",
    ibu:"40",
    detail:"Rubia, amargor intenso.",
    price:"900"
    },
    {name:"SCOTTISH",
    aa:"5",
    ibu:"18",
    detail:"Roja con notas a caramelo y chocolate de amargor bajo. Estilo Ingles, clasico.",
    price:"900"
    },
    {name:"DUBBEL",
    aa:"7.5",
    ibu:"20",
    detail:"Estilo Belga, con notas florales, amargor medio, color rojo intenso. Estilo Ingles, clasico.",
    price:"900"
    },
    {name:"PORTER",
    aa:"5",
    ibu:"20",
    detail:"De origen inglés, es un estilo de cerveza oscura, a base de maltas ahumadas y lúpulos nobles, dando como resultado una bebida de moderada espuma y con aroma a malta con un leve carácter tostado a chocolate.",
    price:"900"
    }
  ]

  drinks = "../../../assets/beer.jpg"

  listaDrinks = [
    {
      imgUrl:"../../../assets/Gin.jpg",
      name:"Gin Tonic",
      datails:"Gin Tonic Gordon, agua tónica, hielo y rodaja de pepino o limón.",
      cost:"1.500"
    },
    {
      imgUrl:"../../../assets/Fernet.jpg",
      name:"Fernet Branca",
      datails:"Fernet Branca, hielo y Coca-Cola.",
      cost:"1.400"
    },
    {
      imgUrl:"../../../assets/Vermut.jpg",
      name:"Vermut",
      datails:"Vermouth Rosso, agua tónica y rodaja de naranja o limón.",
      cost:"1.300"
    },
    {
      imgUrl:"../../../assets/Fernet.jpg",
      name:"Cuba Libre",
      datails:"Ron Havanna Club, Coca-Cola y rodaja de limón.",
      cost:"1.450"
    },
    {
      imgUrl:"../../../assets/Gin.jpg",
      name:"Vodka Tonic",
      datails:"Vodka Smirnoff, hielo, agua tónica y rodaja de limón.",
      cost:"1.450"
    },
    {
      imgUrl:"../../../assets/Vermut.jpg",
      name:"Campari Orange",
      datails:"Campari Milano, hielo y jugo de naranja.",
      cost:"1.400"
    },
    {
      imgUrl:"../../../assets/Gin.jpg",
      name:"Campari Tonic",
      datails:"Campari Milano, agua tónica, hielo y rodaja de limón.",
      cost:"1.400"
    },
    {
      imgUrl:"./../../assets/Vermut.jpg",
      name:"Aperol Orange",
      datails:"Aperol, hielo, jugo de naranja y rodaja de naranja.",
      cost:"1.400"
    }
  ]

  listaFoods = [
    {
      imgUrl:"../../../assets/Papas2.jpg",
      name:"Papas fritas clásicas (Porción)",
      details:"Papas fritas cortadas en bastón.",
      cost:"1.400"
    },
    {
      imgUrl:"../../../assets/PapasCh.jpg",
      name:"Papas fritas rusticas (Porción)",
      details:"Papas rusticas con piel, salsa chedar y verdeo.",
      cost:"1.600"
    },
    {
      imgUrl:"../../../assets/Tequenos.jpg",
      name:"Tequeños (6 Unid)",
      details:"Bastoncitos de queso cubiertos con masa fina de harina de trigo, fritos; acompañados con salsa tartara de 60g.",
      cost:"1.200"
    },
    {
      imgUrl:"../../../assets/Tequenos.jpg",
      name:"Tequeños (12 Unid)",
      details:"Bastoncitos de queso cubiertos con masa fina de harina de trigo, fritos; acompañados con salsa tartara de 60g.",
      cost:"2.250"
    }
  ]
}
