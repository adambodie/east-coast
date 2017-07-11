import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class DayTwoComponent implements OnInit {
	features = [
		{title: "Wait, What?"},
		{title: "Independence Park"},
		{title: "Philly Pride"},
		{title: "More to Philly"},
		{title: "Art Museum"}
	]
	constructor(private pictureService: PictureService) { }
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
	ngOnInit() {
  
  }

}
