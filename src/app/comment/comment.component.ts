import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-comment',
    templateUrl: 'comment.component.html',
      styleUrls: ['./comment.component.css']
})

export class CommentComponent {
    name: string = "";
    comment: string = "";
    @Input() entryId: number;
    @Output() onCommentAdded = new EventEmitter<{name: string; comment:string;}>();
    @ViewChild('commentForm') commentForm: NgForm;

}