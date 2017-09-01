import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-independence',
  templateUrl: './independence.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class IndependenceComponent implements OnInit {

  independencePictures: Picture[];
  libertyBellPictures: Picture[];
  link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/";
  date = "June 18, 2017";        
	constructor(private pictureService: PictureService) { }

	getPictures(): void {
    this.pictureService.getIndependencePictures().then(pictures => this.independencePictures = pictures);
    this.pictureService.getLibertyBellPictures().then(pictures => this.libertyBellPictures = pictures);
	}

  ngOnInit(): void {
    this.getPictures();
  }

}
