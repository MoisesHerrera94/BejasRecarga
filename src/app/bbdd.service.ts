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
    price:"700"
    },
    {name:"pale ale",
    aa:"5.5",
    ibu:"20",
    detail:"Rubia con amargos medio, espuma liviana. Estilo Ingles, clásico.",
    price:"700"
    },
    {name:"APA",
    aa:"5.5",
    ibu:"35",
    detail:"Desarrollada a base de Pale Ale, se desarrolla la Pale americana incorporando lúpulos de esa región con caracteristicas muy particulares, como de aroma citrico.",
    price:"700"
    },
    {name:"HONNEY",
    aa:"6.5",
    ibu:"15",
    detail:"Rubia suave, con agregado de miel que le suma suavidad en la boca y alcohol.",
    price:"700"
    },
    {name:"IPA",
    aa:"5",
    ibu:"40",
    detail:"Rubia, amargor intenso.",
    price:"1400"
    },
    {name:"SCOTTISH",
    aa:"5",
    ibu:"18",
    detail:"Roja con notas a caramelo y chocolate de amargor bajo. Estilo Ingles, clasico.",
    price:"700"
    },
    {name:"DUBBEL",
    aa:"7.5",
    ibu:"20",
    detail:"Estilo Belga, con notas florales, amargor medio, color rojo intenso. Estilo Ingles, clasico.",
    price:"700"
    },
    {name:"PORTER",
    aa:"7.5",
    ibu:"20",
    detail:"Estilo Belga, con notas florales, amargor medio, color rojo intenso. Estilo Ingles, clasico.",
    price:"700"
    }
  ]

  drinks = "../../../assets/beer.jpg"

  listaDrinks = [
    {
      imgUrl:"../../../assets/Gin.jpg",
      name:"Gin",
      datails:"Gin",
      cost:"1500"
    },
    {
      imgUrl:"../../../assets/Fernet.jpg",
      name:"Fernet",
      datails:"Coca-Cola",
      cost:"2000"
    },
    {
      imgUrl:"../../../assets/Vermut.jpg",
      name:"Vermut",
      datails:"Ron",
      cost:"1000"
    }
  ]

  listaFoods = [
    {
      imgUrl:"../../../assets/Papas2.jpg",
      name:"Papas fritas clásicas (Porsión)",
      details:"Papas fritas cortadas en bastón.",
      cost:"1400"
    },
    {
      imgUrl:"../../../assets/PapasCh.jpg",
      name:"Papas fritas rusticas (Porsión)",
      details:"Papas rusticas con piel, salsa chedar y verdeo.",
      cost:"1600"
    },
    {
      imgUrl:"../../../assets/Tequenos.jpg",
      name:"Tequeños (6 Unid)",
      details:"Bastoncitos de queso cobiertos con masa fina de harina de trigo, fritos; acompañados con salsa tartara de 60g.",
      cost:"1200"
    },
    {
      imgUrl:"../../../assets/Tequenos.jpg",
      name:"Tequeños (12 Unid)",
      details:"Bastoncitos de queso cobiertos con masa fina de harina de trigo, fritos; acompañados con salsa tartara de 60g.",
      cost:"2250"
    }
  ]
}
