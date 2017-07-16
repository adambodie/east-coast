import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-delaware',
  templateUrl: './delaware.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class DelawareComponent implements OnInit {
	delawarePictures: Picture[];
	philadelphiaPictures: Picture[];
	date = "June 18, 2017";
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/";        
	constructor(private pictureService: PictureService) { }

	getPictures(): void {
		this.pictureService.getDelawarePictures().then(pictures => this.delawarePictures = pictures);
		this.pictureService.getPhiladelphiaPictures().then(pictures => this.philadelphiaPictures = pictures);
	}

  ngOnInit(): void {
    this.getPictures();
  }

}
