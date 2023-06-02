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
    price:"700"
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
    }
  ]
}
