import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';


@Component({
  selector: 'app-les',
  templateUrl: './les.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class LesComponent implements OnInit {

	lesPictures: Picture[];
	candyPictures: Picture[];
	date = "June 22, 2017";
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
	talibSongs = [
		{title: 'RE:Definition', artist: 'Black Star', link: 'https://www.youtube.com/watch?v=fr6SrRQnZv4'},
		{title: 'Respiration', artist: 'Black Star featuring Common', link: 'https://www.youtube.com/watch?v=eeTnog5RRQo'},		
    {title: 'Move Somethin\'', artist: 'Reflection Eternal', link: 'https://www.youtube.com/watch?v=QlLCVIvrw4Q'},
		{title: 'The Blast', artist: 'Reflection Eternal featuring Vinia Mojica', link: 'https://www.youtube.com/watch?v=scZ0y82zGFY'},
		{title: 'Down For The Count', artist: 'Reflection Eternal featuring Rah Digga and Xzibit', link: 'https://www.youtube.com/watch?v=BFU6Sl69FBQ'},		
    {title: 'Get By', artist: 'Talib Kweli', link: 'https://www.youtube.com/watch?v=UVtpXvzzXiA'},
    {title: 'Waiting for the DJ', artist: 'Talib Kweli featuring Bilal', link: 'https://www.youtube.com/watch?v=5bHoYQCREfE'},
    {title: 'Hot Thing', artist: 'Talib Kweli featuring will.i.am', link: 'https://www.youtube.com/watch?v=lc_OB8Abbws'},
    {title: 'Funny Money', artist: 'Talib Kweli and Madlib', link: 'https://www.youtube.com/watch?v=2JrgwWtfb14'},
		{title: 'Midnight Hour', artist: 'Reflection Eternal featuring Estelle', link: 'https://www.youtube.com/watch?v=UrDOWatyUSc'},
    {title: 'Push Thru', artist: 'Talib Kweli featuring Curren$y, Kendrick Lamar and Glen Reynolds', link: 'https://www.youtube.com/watch?v=TaeYhVWJ5A8'},		
    {title: 'Every Ghetto', artist: 'Talib Kweli and 9th Wonder featuring Rapsody', link: 'https://www.youtube.com/watch?v=oeRp34Uol7Y'}
	]       
	constructor(private pictureService: PictureService) { }

	getPictures(): void {
		this.pictureService.getLesPictures().then(pictures => this.lesPictures = pictures);	
		this.pictureService.getCandyPictures().then(pictures => this.candyPictures = pictures);				
	}

   ngOnInit(): void {
    this.getPictures();
  }

}
