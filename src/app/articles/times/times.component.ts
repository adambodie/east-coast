import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class TimesComponent implements OnInit {

	afternoonPictures: Picture[];
	nightPictures: Picture[];
	johnsPictures: Picture[];
	timesPictures: Picture[];
	juniorPictures: Picture[];		
	date = "June 22, 2017";
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
	       
	constructor(private pictureService: PictureService) { }

	getPictures(): void {
		this.pictureService.getAfternoonPictures().then(pictures => this.afternoonPictures = pictures);	
		this.pictureService.getNightPictures().then(pictures => this.nightPictures = pictures);	
		this.pictureService.getJohnsPictures().then(pictures => this.johnsPictures = pictures);	
		this.pictureService.getTimesPictures().then(pictures => this.timesPictures = pictures);
		this.pictureService.getJuniorPictures().then(pictures => this.juniorPictures = pictures);								
	}

   ngOnInit(): void {
    this.getPictures();
  }

}
