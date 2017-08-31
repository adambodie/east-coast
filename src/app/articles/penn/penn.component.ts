import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-penn',
  templateUrl: './penn.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class PennComponent implements OnInit {

	pennPictures: Picture[];
	continentalPictures: Picture[];
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/";
	date = "June 18, 2017";
	famousPhiladelphians = [
		{name: 'Benjamin Franklin', image: 'benjamin-franklin.jpg', description: 'Founding Father of the United States and Inventor of the Lightning Rod'},
		{name: 'Dick Clark', image: 'dick-clark.jpg', description: 'Radio and TV Personality famous for hosting the New Year\'s Ball'},
		{name: 'Wilt Chamberlin', image: 'chamberlain.jpg', description: 'Hall of Fame Basketball Player for the Philadelphia Warriors/76ers and Los Angeles Lakers'},
		{name: 'Bill Cosby', image: 'cosby.jpg', description: 'Actor and Comedian, star of The Cosby Show'},
		{name: 'Kobe Bryant', image: 'kobe.jpg', description: '(Future) Hall of Fame Basketball Player for the Los Angeles Lakers'},
		{name: 'Reggie Jackson', image: 'reggie-jackson.jpg', description: 'Hall of Fame Professional Baseball Player for the New York Yankees'},
		{name: 'Will Smith', image: 'will-smith.jpg', description: 'Academy Award nominated Actor and Grammy Award Winning Rapper'},
		{name: 'The Roots', image: 'roots.jpg', description: 'Grammy Award winning Hip-hop band and house band for The Jimmy Fallon Show'},    
		{name: 'Betsy Ross', image: 'ross.jpg', description: 'Designer of the original American Flag'}
    ];
	        
	constructor(private pictureService: PictureService) { }

	getPictures(): void {
		this.pictureService.getPennPictures().then(pictures => this.pennPictures = pictures);
		this.pictureService.getContinentalPictures().then(pictures => this.continentalPictures = pictures);
	}

	ngOnInit(): void {
		this.getPictures();
	}

}
