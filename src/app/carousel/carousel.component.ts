import { Component, OnInit } from '@angular/core';

import { Picture } from '../shared/picture';
import { PictureService } from '../shared/picture.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [PictureService]
})
export class CarouselComponent implements OnInit {
  pictures: Picture[];

  constructor(private pictureService: PictureService) { }

  getPictures(): void {
    this.pictureService.getPictures().then(pictures => this.pictures = pictures);
  }

  ngOnInit(): void {
    this.getPictures();
  }
}