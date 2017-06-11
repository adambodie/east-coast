import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Picture } from '../shared/picture';
import { Comments } from '../shared/comments.model';
import { PictureService } from '../shared/picture.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./article.component.css'],
  providers: [PictureService]
})

export class IntroComponent implements OnInit {
  title = "Introduction";
  pictures: Picture[];
  @Input() name: string = "";
  @Input() comment: string = "";
  @Input() id: number;

  submitted = false;

  constructor(private pictureService: PictureService) { }

  getPictures(): void {
    this.pictureService.getPictures().then(pictures => this.pictures = pictures);
  }

  ngOnInit(): void {
    this.getPictures();
  }

    
  onSubmit() {
    this.submitted = true;
  }
}
