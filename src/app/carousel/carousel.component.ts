import { Component } from '@angular/core';

export class Picture {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
}

const PICTURES: Picture[] = [
  {id: 1, image: 'https://placehold.it/600x450/?text=First Slide', alt: 'First Slide', title: "Title One", description: 'Random description One'},
  {id: 2, image: 'https://placehold.it/600x450/?text=Second Slide', alt: 'Second Slide', title: "Title Two", description: 'Random description Two'},
  {id: 3, image: 'https://placehold.it/600x450/?text=Third Slide', alt: 'Third Slide', title: "Title Three", description: 'Random description Three'},
]

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  pictures = PICTURES;
}