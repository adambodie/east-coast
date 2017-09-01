import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleCommentComponent {

  constructor(private cdr: ChangeDetectorRef) {}
  name: string = "";
  comment: string = "";
  time: Date = new Date(Date.now());
  submitted = false;

  onSubmit() {
    if (this.name.length <= 1 || this.comment.length <=4) {
      alert("Please try again"); 
    } else {
      this.submitted = true;
    }
  }

  onClear() {
    this.name =  "";
    this.comment =  "";
    this.submitted = false;
  }
}
