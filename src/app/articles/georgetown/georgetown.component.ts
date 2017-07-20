import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-georgetown',
  templateUrl: './georgetown.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class GeorgetownComponent implements OnInit {
	  georgetownPictures: Picture[];
	  iThaiPictures: Picture[];
	  potomacPictures: Picture[];
	  link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/";
	  date = "June 19, 2017";
	  constructor(private pictureService: PictureService) { }	       
	
	  getPictures(): void {
		this.pictureService.getGeorgetownPictures().then(pictures => this.georgetownPictures = pictures);
		this.pictureService.getIThaiPictures().then(pictures => this.iThaiPictures = pictures);
		this.pictureService.getPotomacPictures().then(pictures => this.potomacPictures = pictures);					
	}
	
	ngOnInit() {
		this.getPictures();
	}

}
