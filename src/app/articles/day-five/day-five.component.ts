import { Component, OnInit } from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-day-five',
  templateUrl: './day-five.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class DayFiveComponent implements OnInit {
features = [
		{	
			title: "New Jersey", 
			link: "/two/jersey", 
			image: "jersey3.jpg", 
			paragraph: "And just like that, it was ready to leave Maryland and head to the Big Apple, the biggest city of them all, New York City.  Of course, that meant having to go through the Joke State, New Jersey.  Check out the nothingness of New Jersey, from the trees on the highway, the extremely fast and rude drivers, and the joke that is New Jersey.  Your impression of New Jersey will be more bloated than Chris Christie himself."
		},
		{
			title: "Welcome to New York City", 
			link: "/two/welcome-nyc", 
			image: "katz1.jpg", 
			paragraph: "There's no city like New York City.  It's true the moment you enter the city.  Check out our first thoughts upon entering the Big Apple and see our Empire State of Mind (thanks JAY-Z)."
		},
		{
			title: "Empire State Building", 
			link: "/two/empire", 
			image: "empire50.jpg", 
			paragraph: "Perhaps the most iconic building in the United States is the classic Empire State Building, whose classic architecture and incredibly tall height make it the crown jewel of New York City, with amazing views all throughout New York City (and New Jersey, but who cares about Jersey).  Check out New York from above at the Empire State Building."
		},
		{
			title: "The Lady and President Tramp", 
			link: "/two/tramp", 
			image: "tramp2.jpg", 
			paragraph: "New York is home of the worst person in the world, Donald Trump.  So naturally, watching a ventriloquist act making fun of the world's worst person would be a delight.  With a friend of a friend of a friend performing, nothing states the uniqueness more than seeing an Off-Broadway show in the Greenwich Village, New York City's Gay District.  Hate Trump?  Click below."
		}
]
	constructor(private pictureService: PictureService) { }
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
	ngOnInit() {
  
  }		

}
