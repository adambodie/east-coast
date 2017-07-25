import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-jersey',
  templateUrl: './jersey.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class JerseyComponent implements OnInit {
	jerseyPictures: Picture[];
	jerseyCityPictures: Picture[];
	date = "June 21, 2017";
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/";        
	constructor(private pictureService: PictureService) { }
  famousJerseys = [
    {name:'Buzz Aldrin', image: 'aldrin.jpg'},
    {name: 'Jon Bon Jovi', image: 'bon-jovi.jpg'},
    {name: 'Whitney Houston', image: 'houston.jpg'},
    {name: 'Jerry Lewis', image: 'jerry-lewis.jpg'},
    {name: 'Jack Nicholson', image: 'nicholson.jpg'},
    {name: 'Shaquille O\'Neal', image: 'o-neal.jpg'},
    {name: 'Frank Sinatra', image: 'sinatra.jpg'},
    {name: 'Bruce Springsteen', image: 'springsteen.jpg'},
    {name: 'John Travolta', image: 'travolta.jpg'}
    ];
	getPictures(): void {
		this.pictureService.getJerseyPictures().then(pictures => this.jerseyPictures = pictures);
		this.pictureService.getJerseyCityPictures().then(pictures => this.jerseyCityPictures = pictures);
	}

  ngOnInit(): void {
    this.getPictures();
  }

}
