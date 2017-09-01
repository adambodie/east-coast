import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-liberty',
  templateUrl: './liberty.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class LibertyComponent implements OnInit {

	batteryPictures: Picture[];
	ferryPictures: Picture[];
	libertyPictures: Picture[];
	ellisPictures: Picture[];
	date = "June 22, 2017";
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
	       
	constructor(private pictureService: PictureService) { }

	getPictures(): void {
		this.pictureService.getBatteryPictures().then(pictures => this.batteryPictures = pictures);
		this.pictureService.getFerryPictures().then(pictures => this.ferryPictures = pictures);
		this.pictureService.getLibertyPictures().then(pictures => this.libertyPictures = pictures);	
		this.pictureService.getEllisPictures().then(pictures => this.ellisPictures = pictures);						
	}

   ngOnInit(): void {
    this.getPictures();
  }

}
