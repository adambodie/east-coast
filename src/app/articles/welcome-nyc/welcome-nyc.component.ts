import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-welcome-nyc',
  templateUrl: './welcome-nyc.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class WelcomeNycComponent implements OnInit {

	welcomeNycPictures: Picture[];
	katzPictures: Picture[];
  gatsbyPictures: Picture[];
  subwayPictures: Picture[];
	date = "June 21, 2017";
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 

	famousNewYorks = [
    {name: 'Kareem Abdul Jabbar', image: 'abdul-jabbar.jpg', letter: 'A', description: 'Hall of Fame Basketball player for the Los Angeles Lakers'},
    {name: 'Humphrey Bogart', image: 'bogart.jpg', letter: 'B', description: 'Actor, star of the classic film Casablanca'},
    {name: 'Billy Crystal', image: 'crystal.jpg', letter: 'C', description: 'Actor, comedian, frequent host of the Academy Awards'},
    {name: 'Robert De Niro', image: 'de-niro.jpg', letter: 'D', description: 'Actor of many films, including The Godfather Part II, Taxi Driver and Goodfellas'},
    {name: 'Duke Ellington', image: 'ellington.jpg', letter: 'E', description: 'Bandleader, jazz musician'},
    {name: 'Jane Fonda', image: 'fonda.jpg', letter: 'F', description: 'Actress, political activist'},
    {name: 'Lou Gehrig', image: 'gehrig.jpg', letter: 'G', description: 'Hall of Fame Baseball player for the New York Yankees'},
		{name: 'Curly and Moe Howard', image: 'howard.jpg', letter: 'H', description: 'Two of the Three Stooges'},
    {name: 'Washington Irving', image: 'irving.jpg', letter: 'I', description: 'Short story writer of Rip Van Winkle and The Legend of Sleepy Hollow'},
    {name: 'Michael Jordan', image: 'jordan.jpg', letter: 'J', description: 'Hall of Fame Basketball player for the Chicago Bulls'},
    {name: 'Andy Kaufman', image: 'kaufman.jpg', letter: 'K', description: 'Actor, Entertainer and Performance Artist'},
    {name: 'Vince Lombardi', image: 'lombardi.jpg', letter: 'L', description: 'Hall of Fame Football coach of the Green Bay Packers'},
    {name: 'Eddie Murphy', image: 'murphy.jpg', letter: 'M', description: 'Comedian, Actor'},
    {name: 'Harry Nilsson', image: 'nilsson.jpg', letter: 'N', description: 'Rock singer-songwriter'},
    {name: 'John Oates', image: 'oates.jpg', letter: 'O', description: 'Musician, one half of Hall and Oates'},
		{name: 'Colin Powell', image: 'powell.jpg', letter: 'P', description: 'Retired Four-Star General and former Secretary of State'},
    {name: 'Q-Tip', image: 'q-tip.jpg', letter: 'Q', description: 'Rapper of A Tribe Called Quest'},
    {name: 'Franklin D Roosevelt', image: 'roosevelt.jpg', letter: 'R', description: '32nd President of the United States'},
    {name: 'Jerry Seinfeld', image: 'seinfeld.jpg', letter: 'S', description: 'Comedian, star of Seinfeld'},
    {name: 'Mike Tyson', image: 'tyson.jpg', letter: 'T', description: 'Professional Boxer, former Heavyweight Champion'},
    {name: 'Leslie Uggams', image: 'uggams.jpg', letter: 'U', description: 'Actress and Singer'},
    {name: 'Luther Vandross', image: 'vandross.jpg', letter: 'V', description: 'R&B Singer'},
    {name: 'Christopher Wallace', image: 'notorious.jpg', letter: 'W', description: 'Rapper better known as The Notorious B.I.G.'},
		{name: 'X Clan', image: 'x-clan.jpg', letter: 'X', description: 'Rap group'},
    {name: 'Tony Young', image: 'young.jpg', letter: 'Y', description: 'Character Actor'},
    {name: 'Z-Trip', image: 'ztrip.jpg', letter: 'Z', description: 'DJ and producer'},
					
	]
 	       
	constructor(private pictureService: PictureService) { }

	getPictures(): void {
		this.pictureService.getWelcomeNycPictures().then(pictures => this.welcomeNycPictures = pictures);
		this.pictureService.getKatzPictures().then(pictures => this.katzPictures = pictures);
    this.pictureService.getGatsbyPictures().then(pictures => this.gatsbyPictures = pictures);
    this.pictureService.getSubwayPictures().then(pictures => this.subwayPictures = pictures);			
	}

  ngOnInit(): void {
    this.getPictures();
  }

}
