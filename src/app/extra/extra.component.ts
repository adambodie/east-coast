import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/";
  constructor() { }

  ngOnInit() {
  }

}
