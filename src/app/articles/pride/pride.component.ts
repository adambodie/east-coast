import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-pride',
  templateUrl: './pride.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class PrideComponent implements OnInit {
	pridePictures: Picture[];
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/";        
	constructor(private pictureService: PictureService) { }

	getPictures(): void {
		this.pictureService.getPridePictures().then(pictures => this.pridePictures = pictures);
	}

  ngOnInit(): void {
    this.getPictures();
  }

}
