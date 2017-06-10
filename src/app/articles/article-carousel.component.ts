import { Component, OnInit } from '@angular/core';

import { Picture } from '../shared/picture';
import { PictureService } from '../shared/picture.service';


@Component({
  selector: 'app-article-carousel',
  templateUrl: './article-carousel.component.html',
  styleUrls: ['./article.component.css'],
  providers: [PictureService]
})
export class ArticleCarouselComponent implements OnInit {
  pictures: Picture[];

  constructor(private pictureService: PictureService) { }

  getPictures(): void {
    this.pictureService.getPictures().then(pictures => this.pictures = pictures);
  }

  ngOnInit(): void {
    this.getPictures();
  }
}