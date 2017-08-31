import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})

export class IntroComponent implements OnInit {
  introPictures: Picture[];
  kevinPictures: Picture[];
  link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/";  
  date = "June 17, 2017";
  famousAls = [
    {name:'Al Green', image: 'green.jpg', description: 'Soul singer, songwriter and producer'},
    {name: 'Al Roker', image: 'roker.jpg', description: 'TV personality of NBC\'s Today Show'},
    {name: 'Al Pacino', image: 'pacino.jpg', description: 'Academy Award winning Actor'},
    {name: 'Al Gore', image: 'gore.jpg', description: 'Vice President of the United States under Bill Clinton and Environmental Activist'},
    {name: 'Big Gay Al', image: 'big-gay-al.jpg', description: 'Flamboyantly gay character from South Park'},
    {name: 'Weird Al Yankovic', image: 'yankovic.jpg', description: 'Singer, songwriter, parodist of many popular songs'},
    {name: 'Al Capone', image: 'capone.jpg', description: 'Notorious Gangster during the Prohibition Era'},
    {name: 'Al Franken', image: 'franken.jpg', description: 'TV writer, comedian and current U.S. Senator from Minnesota'},
    {name: 'Al Davis', image: 'davis.jpg', description: 'Former NFL coach and owner of the Oakland Raiders'}
    ];


  constructor(private pictureService: PictureService) { }

  getPictures(): void {
    this.pictureService.getIntroPictures().then(pictures => this.introPictures = pictures);
    this.pictureService.getKevinPictures().then(pictures => this.kevinPictures = pictures);
  }

  ngOnInit(): void {
    this.getPictures();
  }

}
