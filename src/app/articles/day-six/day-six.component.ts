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
			image: "wtc11.jpg", 
			paragraph: "One of the worst days in American History, definitely one of the worst in my lifetime, was the horrific attacks on 9/11.  Being in New York City, right where the attacks occurred, makes it all the more emotional.  Click the link to see how New York honored the lives lost on 9/11."
		},
		{
			title: "Statue of Liberty", 
			link: "/six/liberty", 
			image: "liberty60.jpg", 
			paragraph: "Built in 1886, the Statue of Liberty is one of New York's premier destinations, a symbol of liberty and a welcoming sign for all, from the immigrants who make their way to America, to those who love our country.  Click below to see the adventures at the Statue of Liberty."
		},
		{
			title: "Times Square", 
			link: "/six/times", 
			image: "times76.jpg", 
			paragraph: "No place in America provides more excitement in a little place more than Times Square, the crossroads of the world to many who visit just to have a good time.  See the zany adventures at Times Square by clicking the link below."
		}
	]
	constructor(private pictureService: PictureService) { }
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
	ngOnInit() {
  
  }

}
