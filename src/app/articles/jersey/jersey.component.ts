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
    {name:'Buzz Aldrin', image: 'aldrin.jpg', description: 'Astronaut, one of the first humans to walk on the Moon'},
    {name: 'Jon Bon Jovi', image: 'bon-jovi.jpg', description: 'Musician, frontman for the rock group Bon Jovi'},
    {name: 'Whitney Houston', image: 'houston.jpg', description: 'R&B Singer and Actress'},
    {name: 'Jerry Lewis', image: 'jerry-lewis.jpg', description: 'Actor and Comedian, host of the Muscular Dystrophy Association Telethons'},
    {name: 'Jack Nicholson', image: 'nicholson.jpg', description: 'Academy Award winning Actor, most nominated Actor in Academy Award history.'},
    {name: 'Shaquille O\'Neal', image: 'o-neal.jpg', description: 'Hall of Fame Basketball Player for the Los Angeles Lakers and other teams'},
    {name: 'Frank Sinatra', image: 'sinatra.jpg', description: 'Singer, Actor and Producer, one of the most influential artists in the 20th Century'},
    {name: 'Bruce Springsteen', image: 'springsteen.jpg', description: 'Singer-songwriter of the E Street Band known as "The Boss"'},
    {name: 'John Travolta', image: 'travolta.jpg', description: 'Academy Award nominated Actor, dancer, singer'}
    ];
	getPictures(): void {
		this.pictureService.getJerseyPictures().then(pictures => this.jerseyPictures = pictures);
		this.pictureService.getJerseyCityPictures().then(pictures => this.jerseyCityPictures = pictures);
	}

  ngOnInit(): void {
    this.getPictures();
  }

}
