import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-wtc',
  templateUrl: './wtc.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class WtcComponent implements OnInit {

	wtcPictures: Picture[];
	date = "June 22, 2017";
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
	       
	constructor(private pictureService: PictureService) { }

	getPictures(): void {
		this.pictureService.getWtcPictures().then(pictures => this.wtcPictures = pictures);				
	}

   ngOnInit(): void {
    this.getPictures();
  }

}
