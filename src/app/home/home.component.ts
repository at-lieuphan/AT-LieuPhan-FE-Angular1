import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products = [{
    img: '1.jpg',
    title: `Traditional women's long dress, neck jars`,
    description: 'Color red, handmade embroidery',
    price: 300
  },
  {
    img: '3.jpg',
    title: `Traditional women's long dress, neck jars`,
    description: 'Color white, handmade embroidery',
    price: 300
  },
  {
    img: '4.jpg',
    title: `Traditional women's long dress, neck jars`,
    description: 'Color blue, handmade embroidery',
    price: 350
  },
  {
    img: '8.png',
    title: `Traditional women's long dress, neck jars`,
    description: 'Color white, handmade embroidery',
    price: 330
  },
  {
    img: '2.jpg',
    title: `Innovative men's long dress 1`,
    description: 'Color red, handmade embroidery',
    price: 300
  },
  {
    img: '5.jpg',
    title: `Innovative men's long dress 2`,
    description: 'Color white, handmade embroidery',
    price: 320
  },
  {
    img: '6.jpg',
    title: `Innovative men's long dress 3`,
    description: 'Color white, handmade embroidery',
    price: 270
  },
  {
    img: '7.jpg',
    title: `Innovative men's long dress 4`,
    description: 'Color white, handmade embroidery',
    price: 260
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
