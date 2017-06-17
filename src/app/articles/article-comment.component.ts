import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Comment } from '../shared/comments.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleCommentComponent {
  @Input() comment: Comment;

  submitted = false;
    
  onSubmit() {
    this.submitted = true;
  }
}
