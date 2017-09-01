import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-arlington',
  templateUrl: './arlington.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class ArlingtonComponent implements OnInit {

	chickFilAPictures: Picture[];
	arlingtonPictures: Picture[];
	unknownPictures: Picture[];
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/";
	date = "June 20, 2017";        
	constructor(private pictureService: PictureService) { }

	getPictures(): void {
		this.pictureService.getChickFilAPictures().then(pictures => this.chickFilAPictures = pictures);
		this.pictureService.getArlingtonPictures().then(pictures => this.arlingtonPictures = pictures);
		this.pictureService.getUnknownPictures().then(pictures => this.unknownPictures = pictures);
	}

	ngOnInit(): void {
		this.getPictures();
	}

}
