import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-empire',
  templateUrl: './empire.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class EmpireComponent implements OnInit {

	empire80Pictures: Picture[];
	date = "June 21, 2017";
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
	       
	constructor(private pictureService: PictureService) { }

	getPictures(): void {
		this.pictureService.getEmpire80Pictures().then(pictures => this.empire80Pictures = pictures);	
	}

  ngOnInit(): void {
    this.getPictures();
  }

}
