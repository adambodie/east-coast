import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-article-comment',
    templateUrl: 'article-comment.component.html',
      styleUrls: ['./article.component.css']
})

export class ArticleCommentComponent {
    name: string = "";
    comment: string = "";
    @Input() entryId: number;
    @Output() onCommentAdded = new EventEmitter<{name: string; comment:string;}>();
    @ViewChild('commentForm') commentForm: NgForm;

}