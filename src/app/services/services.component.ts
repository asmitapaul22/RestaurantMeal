import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
servicedetails=[
  {
    picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiRuFBrLsvIQeRhQaMcD02dQ_9K3QHMsUXng&usqp=CAU",
    title:"QUALITY CUISINE",
   description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iure. Lorem ipsum dolor sit amet."
 },
  {
    picture:"data:image/png;base64,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",
    title:"FRESH FOOD",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iure. Lorem ipsum dolor sit amet."
  },
  {
    picture:"https://cdn.iconscout.com/icon/premium/png-256-thumb/cheese-pancake-1878860-1592822.png",
    title:"BREAD & PANCAKES",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iure. Lorem ipsum dolor sit amet."
  },
  {
    picture:"https://freeiconshop.com/wp-content/uploads/edd/food-solid.png",
    title:"EVERYDAY NEW",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iure. Lorem ipsum dolor sit amet."
  },
  {
    picture:"https://cdn.iconscout.com/icon/premium/png-256-thumb/fruits-and-vegetables-1469302-1243737.png",
    title:"FRESH VEGIES SALAD",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iure. Lorem ipsum dolor sit amet."
  },
  {
    picture:"https://i.pinimg.com/originals/9c/62/3f/9c623fd521c0c5b4d5bf577430881b29.png",
    title:"WHOLE CHICKEN",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iure. Lorem ipsum dolor sit amet."
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
