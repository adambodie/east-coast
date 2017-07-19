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
    {name:'Al Green', image: 'green.jpg'},
    {name: 'Al Roker', image: 'roker.jpg'},
    {name: 'Al Pacino', image: 'pacino.jpg'},
    {name: 'Al Gore', image: 'gore.jpg'},
    {name: 'Big Gay Al', image: 'big-gay-al.jpg'},
    {name: 'Weird Al Yankovic', image: 'yankovic.jpg'},
    {name: 'Al Capone', image: 'capone.jpg'},
    {name: 'Al Franken', image: 'franken.jpg'},
    {name: 'Al Davis', image: 'davis.jpg'}
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