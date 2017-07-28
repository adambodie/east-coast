import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-welcome-nyc',
  templateUrl: './welcome-nyc.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class WelcomeNycComponent implements OnInit {

	welcomeNycPictures: Picture[];
	katzPictures: Picture[];
	gatsbyPictures: Picture[];
	date = "June 21, 2017";
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 

 	       
	constructor(private pictureService: PictureService) { }

	getPictures(): void {
		this.pictureService.getWelcomeNycPictures().then(pictures => this.welcomeNycPictures = pictures);
		this.pictureService.getKatzPictures().then(pictures => this.katzPictures = pictures);
		this.pictureService.getGatsbyPictures().then(pictures => this.gatsbyPictures = pictures);		
	}

  ngOnInit(): void {
    this.getPictures();
  }

}
