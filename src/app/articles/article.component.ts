import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Picture } from '../shared/picture';
import { PictureService } from '../shared/picture.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [PictureService]
})

export class ArticleComponent implements OnInit {
  title = "Introduction";
  pictures: Picture[];

  constructor(private pictureService: PictureService) { }

  getPictures(): void {
    this.pictureService.getPictures().then(pictures => this.pictures = pictures);
  }

  ngOnInit(): void {
    this.getPictures();
  }
    name: string = "";
    comment: string = "";
    @Input() entryId: number;
    @Output() onCommentAdded = new EventEmitter<{name: string; comment:string;}>();
    @ViewChild('commentForm') commentForm: NgForm;  
}
