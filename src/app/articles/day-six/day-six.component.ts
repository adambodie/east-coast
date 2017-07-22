import { Component, OnInit } from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-day-six',
  templateUrl: './day-six.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class DaySixComponent implements OnInit {
	features = [
		{	
			title: "Lower East Side", 
			link: "/two/les", 
			image: "les5.jpg", 
			paragraph: ""
		},
		{
			title: "9/11 Memorial", 
			link: "/two/wtc", 
			image: "wtc5.jpg", 
			paragraph: ""
		},
		{
			title: "Statue of Liberty", 
			link: "/two/liberty", 
			image: "liberty50.jpg", 
			paragraph: ""
		},
		{
			title: "Times Square", 
			link: "/two/times", 
			image: "times30.jpg", 
			paragraph: ""
		}
	]
	constructor(private pictureService: PictureService) { }
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
	ngOnInit() {
  
  }

}
