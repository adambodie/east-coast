import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-tramp',
  templateUrl: './tramp.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class TrampComponent implements OnInit {

	trampPictures: Picture[];
	italyPictures: Picture[];
	date = "June 21, 2017";
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
 	       
	constructor(private pictureService: PictureService) { }

	getPictures(): void {
		this.pictureService.getTrampPictures().then(pictures => this.trampPictures = pictures);
		this.pictureService.getItalyPictures().then(pictures => this.italyPictures = pictures);		
	}

	  ngOnInit(): void {
		this.getPictures();
	  }

}
