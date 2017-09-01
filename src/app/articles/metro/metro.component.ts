import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-metro',
  templateUrl: './metro.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class MetroComponent implements OnInit {

	metroPictures: Picture[];
	sakuraPictures: Picture[];
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/";
	date = "June 20, 2017";        
	constructor(private pictureService: PictureService) { }

	getPictures(): void {
		this.pictureService.getMetroPictures().then(pictures => this.metroPictures = pictures);
		this.pictureService.getSakuraPictures().then(pictures => this.sakuraPictures = pictures);
	}

	ngOnInit(): void {
		this.getPictures();
	}

}
