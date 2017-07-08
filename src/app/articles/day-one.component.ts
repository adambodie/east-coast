import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Picture } from '../shared/picture';
import { Comment } from '../shared/comments.model';
import { PictureService } from '../shared/picture.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-day-one',
  templateUrl: './day-one.component.html',
  styleUrls: ['./article.component.css'],
  providers: [PictureService]
})
export class DayOneComponent implements OnInit {
  baltimorePictures: Picture[];
  pierPictures: Picture[];
  link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/";        
  constructor(private pictureService: PictureService) { }

  getPictures(): void {
    this.pictureService.getBaltimorePictures().then(pictures => this.baltimorePictures = pictures);
    this.pictureService.getPierPictures().then(pictures => this.pierPictures = pictures);
  }

  ngOnInit(): void {
    this.getPictures();
  }
}