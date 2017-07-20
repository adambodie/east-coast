import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-georgetown',
  templateUrl: './georgetown.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class GeorgetownComponent implements OnInit {

	constructor(private pictureService: PictureService) { }
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
	ngOnInit() {
  
	}

}
