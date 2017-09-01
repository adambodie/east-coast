import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-capitol',
  templateUrl: './capitol.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class CapitolComponent implements OnInit {
	  capitolPictures: Picture[];
	  alibiPictures: Picture[];
	  mallPictures: Picture[];
	  link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/";
	  date = "June 19, 2017";
	  constructor(private pictureService: PictureService) { }	       
	
	  getPictures(): void {
		this.pictureService.getCapitolPictures().then(pictures => this.capitolPictures = pictures);
		this.pictureService.getAlibiPictures().then(pictures => this.alibiPictures = pictures);
		this.pictureService.getMallPictures().then(pictures => this.mallPictures = pictures);					
	}
	
	ngOnInit() {
		this.getPictures();
	}

}
