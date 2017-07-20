import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';


@Component({
  selector: 'app-day-three',
  templateUrl: './day-three.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class DayThreeComponent implements OnInit {

	features = [
		{	
			title: "Capitol", 
			link: "/three/capitol", 
			image: "capitol19.jpg", 
			paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at accumsan leo. Nulla cursus odio vel tempus bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam a quam eu lorem dapibus cursus vitae in dolor. Vestibulum accumsan pulvinar vehicula. Ut tincidunt, tortor dignissim varius vestibulum, lectus sem hendrerit ligula, vel congue lectus enim eu elit. Nunc vestibulum pretium ex nec convallis."
		},
		{
			title: "Georgetown", 
			link: "/three/georgetown", 
			image: "potomac15.jpg", 
			paragraph: "Donec quis odio massa. Nam porttitor augue sem, dignissim consectetur lacus fringilla ac. Proin lectus magna, tristique sed augue et, finibus dapibus eros. Sed maximus risus et sapien accumsan vulputate. Vivamus vitae purus at dolor feugiat lacinia in id urna."
		}
	]
	constructor(private pictureService: PictureService) { }
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
	ngOnInit() {
  
	}

}
