import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

const IMAGES = [
  {'name': 'Blue 10', 'image': 'philadelphia', 'description': 'xyz'},
  {'name': 'Blue 20', 'image': 'philadelphia2', 'description': 'xyz'},
  {'name': 'Blue 30', 'image': 'unknown', 'description': 'xyz'},
 
];

@Component({
  selector: 'app-empire',
  templateUrl: './empire.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class EmpireComponent implements OnInit {

	empire80Pictures: Picture[];
	empire86Pictures: Picture[];
	date = "June 21, 2017";
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
	       
	constructor(private pictureService: PictureService) { }
	show: boolean = false;
	private value:any = {};
	private items:Array<any> = [];
	public refreshValue(value:any):void {
		this.value = value;
		this.show = true;
		console.log(this.show);
	}

	getPictures(): void {
		this.pictureService.getEmpire80Pictures().then(pictures => this.empire80Pictures = pictures);	
		this.pictureService.getEmpire86Pictures().then(pictures => this.empire86Pictures = pictures);			
	}

   ngOnInit(): void {
    this.getPictures();
    IMAGES.forEach((feature:{name:string, image:string, description:string}) => {
      this.items.push({
        id: feature.image,
        text: feature.name
      });
    });
  }


 

}
