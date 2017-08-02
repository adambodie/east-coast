import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';


@Component({
  selector: 'app-les',
  templateUrl: './les.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class LesComponent implements OnInit {

	lesPictures: Picture[];
	candyPictures: Picture[];
	date = "June 22, 2017";
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
	       
	constructor(private pictureService: PictureService) { }

	getPictures(): void {
		this.pictureService.getLesPictures().then(pictures => this.lesPictures = pictures);	
		this.pictureService.getCandyPictures().then(pictures => this.candyPictures = pictures);				
	}

   ngOnInit(): void {
    this.getPictures();
  }

}
