import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';


@Component({
  selector: 'app-day-three',
  templateUrl: './day-three.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class DayThreeComponent implements OnInit {

	features = [
		{	
			title: "U.S. Capitol", 
			link: "/three/capitol", 
			image: "capitol19.jpg", 
			paragraph: "Visiting the Nation's Capital means seeing where are government allegedly works.  Home of our current Incompetent Republican controlled Congress, check out where our Congress used to do work.  A beautiful outside makes up for a lack of progress.  After all, Progress is the opposite of Congress."
		},
		{
			title: "Georgetown", 
			link: "/three/georgetown", 
			image: "potomac15.jpg", 
			paragraph: "Nothing says style in D.C. more than visiting Georgetown, the more hip part of D.C., where no Government is involved in making decisions (not that they have made any recently).  Also hip is living on the Potomac River in a house boat.  With a friend of a friend living on a boat in the river, these areas are what gives D.C. its hipness."
		}
	]
	constructor(private pictureService: PictureService) { }
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
	ngOnInit() {
  
	}

}
