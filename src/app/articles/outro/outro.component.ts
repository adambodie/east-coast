import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-outro',
  templateUrl: './outro.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class OutroComponent implements OnInit {

	outroPictures: Picture[];
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/";
	date = "June 23, 2017";        
	constructor(private pictureService: PictureService) { }

	getPictures(): void {
		this.pictureService.getOutroPictures().then(pictures => this.outroPictures = pictures);
	}

	ngOnInit(): void {
		this.getPictures();
	}

}
