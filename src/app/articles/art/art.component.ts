import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class ArtComponent implements OnInit {

	artPictures: Picture[];
	dancePictures: Picture[];
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/";
	date = "June 18, 2017";        
	constructor(private pictureService: PictureService) { }

	getPictures(): void {
		this.pictureService.getArtPictures().then(pictures => this.artPictures = pictures);
		this.pictureService.getDancePictures().then(pictures => this.dancePictures = pictures);
	}

	ngOnInit(): void {
		this.getPictures();
	}

}
