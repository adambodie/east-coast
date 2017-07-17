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
		{name:'Benjamin Franklin', image: 'benjamin-franklin.jpg'},
		{name: 'Dick Clark', image: 'dick-clark.jpg'},
		{name: 'Wilt Chamberlin', image: 'chamberlain.jpg'},
		{name: 'Noam Chomsky', image: 'chomsky.jpg'},
		{name: 'Bill Cosby', image: 'cosby.jpg'},
		{name: 'Bradley Cooper', image: 'bradley-cooper.jpg'},
		{name: 'Kobe Bryant', image: 'kobe.jpg'},
		{name: 'Reggie Jackson', image: 'reggie-jackson.jpg'},
		{name: 'Will Smith', image: 'will-smith.jpg'},
		{name: 'Richard Gere', image: 'gere.jpg'},
		{name: 'The Roots', image: 'roots.jpg'},    
		{name: 'Betsy Ross', image: 'ross.jpg'}
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
