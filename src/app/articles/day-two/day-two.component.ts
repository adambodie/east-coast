import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class DayTwoComponent implements OnInit {
	features = [
		{	
			title: "Wait, What?", 
			link: "/two/delaware", 
			image: "philadelphia9.jpg", 
			paragraph: "The trip from Maryland to Philadelphia is a two hour drive.  Naturally, getting there is half the battle.  Also apparent is that the quickest route to Philadelphia involves entering Delaware.  Click the link below to read about the journey through Northern Maryland and Delaware before culminating into Pennsylvania."
		},
		{
			title: "Independence Park", 
			link: "/two/independence", 
			image: "independence11.jpg", 
			paragraph: "Philadelphia is rich in Colonial United States history.  One of the oldest cities in the United States, it is home of Independence Hall and the Liberty Bell.  Click below to see and read about the famed historical sights that Philadelphia is world famous for."
		},
		{
			title: "Philly Pride", 
			link: "/two/pride", 
			image: "pride27.jpg", 
			paragraph: "There's a reason Philadelphia is nicknamed the City of Brotherly Love.  Our trip to Philadelphia coincided with the Philly Pride Parade for the LGBTQ community which deserves the same rights as anyone else.  Check out Pictures, Videos and other tidbits by clicking the link below."
		},
		{
			title: "More to Philly", 
			link: "/two/penn", 
			image: "penn4.jpg", 
			paragraph: "After the Pride parade was over, it was time to eat and check out nearby attractions.  Located close to Penn's Landing, this made it a perfect place to explore after eating lunch.  To dig deeper in Philadelphia, click the link below."
		},
		{
			title: "Art Museum", 
			link: "/two/art", 
			image: "art21.jpg", 
			paragraph: "Standing at 5 feet, 10 inches and weighing 216 pounds is Philadelphia's favorite champion, Rocky Balboa.  Making the classic Philadelphia Museum of Art and worldwide attraction for all things Rocky, who ran up the Rocky Steps en route to being America's favorite fictional boxer, click below to see our adventures doing the Rocky experience, and more..."
		},
		{
			title: "Goodbye Philly", 
			link: "/two/philly", 
			image: "philadelphia35.jpg", 
			paragraph: "All good things must come to an end.  And that was true for Philadelphia.  I would have loved to stay, but we had bigger fish to fry.  Relive our departure from Philadelphia by clicking the link below."
		}
	]
	constructor(private pictureService: PictureService) { }
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
	ngOnInit() {
  
  }

}
