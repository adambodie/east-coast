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
			link: "/six/les", 
			image: "les8.jpg", 
			paragraph: "New York City is not all glamour and gold.  There are plenty of spots in New York for the ordinary people.  Click below to see my adventures walking through the Lower East Side and enjoying the simpler things in New York.  Candy not included."
		},
		{
			title: "9/11 Memorial", 
			link: "/six/wtc", 
			image: "wtc5.jpg", 
			paragraph: ""
		},
		{
			title: "Statue of Liberty", 
			link: "/six/liberty", 
			image: "liberty50.jpg", 
			paragraph: ""
		},
		{
			title: "Times Square", 
			link: "/six/times", 
			image: "times30.jpg", 
			paragraph: ""
		}
	]
	constructor(private pictureService: PictureService) { }
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
	ngOnInit() {
  
  }

}
