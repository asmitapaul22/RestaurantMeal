import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menudetails=[{
    image:'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/oats-upma-recipe-1737051.jpg',
    name:"OATS UPMA",
    price:"40 Rs",
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'},
    {
      image:'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/idli-recipe-how-to-make-idli-soft-idli-recipe-idli-with-idli-rava-2170173.jpg',
      name:"IDLI",
      price:"30 Rs",
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'},
      {
        image:'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/aloo-paratha-recipe-aloo-ka-paratha-recipe-alu-paratha-recipe-1812720.jpg',
        name:"ALOO PARATHA",
        price:"30 Rs",
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'},
        {
          image:'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/failproof-instant-nylon-khaman-ce367b.jpg',
          name:"NYLON KHAMAN DHOKLA",
          price:"40 Rs",
          description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'}
]
details(i:number){

  if(i==1){
    this.menudetails=[{
      image:'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/oats-upma-recipe-1737051.jpg',
      name:"OATS UPMA",
      price:"40 Rs",
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'},
      {
        image:'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/idli-recipe-how-to-make-idli-soft-idli-recipe-idli-with-idli-rava-2170173.jpg',
        name:"IDLI",
        price:"30 Rs",
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'},
        {
          image:'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/aloo-paratha-recipe-aloo-ka-paratha-recipe-alu-paratha-recipe-1812720.jpg',
          name:"ALOO PARATHA",
          price:"30 Rs",
          description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'},
          {
            image:'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/failproof-instant-nylon-khaman-ce367b.jpg',
            name:"NYLON KHAMAN DHOKLA",
            price:"40 Rs",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'}
            
  ]
  }
  else if(i==2){
    this.menudetails=[{
      image:'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/instant-chole-bhature-recipe-1998148.jpg',
      name:"CHANA KULCHA",
      price:"100 Rs",
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'},
      {
        image:'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/aloo-egg-curry-potato-egg-curry-aloo-anda-curry-2339236.jpg',
        name:"SHAHI EGG CURRY",
        price:"150 Rs",
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'},
        {
          image:'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/slow-cooker-dal-makhani-2578915.jpg',
          name:"DAL MAKHANI",
          price:"130 Rs",
          description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'},
          {
            image:'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/pulao-recipe-veg-pulao-recipe-vegetable-pulav-recipe-2179670.jpg',
            name:"VEG PULAO",
            price:"210 Rs",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'}]
  }
  else if(i==3){
    this.menudetails=[{
      image:'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/chicken-biryani-recipe-aab154.jpg',
      name:"CHICKEN BIRYANI",
      price:"250 Rs",
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'},
      {
        image:'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/paneer-butter-masala-1c1b56.jpg',
        name:"BUTTER PANEER WITH NAAN",
        price:"270 Rs",
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'},
        {
          image:'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/paneer-butter-masala-paneer-makhani-in-instant-pot-2342040.jpg',
          name:"PANEER BUTTER MASALA",
          price:"220 Rs",
          description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'},
          {
            image:'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/palak-methi-paneer-2290914.jpg',
            name:"PALAK PANEER WITH ROTI",
            price:"240 Rs",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, officia.'}]
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
