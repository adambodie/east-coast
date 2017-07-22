import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';


@Component({
  selector: 'app-day-four',
  templateUrl: './day-four.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class DayFourComponent implements OnInit {

	features = [
		{	
			title: "Arlington National Cemetery", 
			link: "/four/arlington", 
			image: "arlington20.jpg", 
			paragraph: "Never having found a place in Virginia to visit, I naturally needed to go to Virginia at least once on this trip.  That brought us to the Arlington National Cemetery, home of thousands upon thousands of graves, honoring those who fought for America and served our country well.  If you want to see pictures of graves and tombstones, this is the perfect place to see them."
		},
		{
			title: "Metro", 
			link: "/four/metro", 
			image: "metro2.jpg", 
			paragraph: "Travelling throughout the D.C. Metro can be hectic with all the people there.  Traffic can make some travel downright impossible at times.  With the car in the shop, public transportation was essential. Thankfully, there's the Metro.  Here you'll find our travels from Virginia to Maryland while travelling the Metro.  "
		}
	]
	constructor(private pictureService: PictureService) { }
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
	ngOnInit() {
  
	}

}

