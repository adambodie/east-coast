import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-philly',
  templateUrl: './philly.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class PhillyComponent implements OnInit {

	phillyPictures: Picture[];
	chidoPictures: Picture[];	
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/";
	date = "June 18, 2017";        
	constructor(private pictureService: PictureService) { }

	getPictures(): void {
		this.pictureService.getPhillyPictures().then(pictures => this.phillyPictures = pictures);
		this.pictureService.getChidoPictures().then(pictures => this.chidoPictures = pictures);
	}

	ngOnInit(): void {
		this.getPictures();
	}

}
