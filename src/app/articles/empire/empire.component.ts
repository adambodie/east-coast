import { Component, OnInit} from '@angular/core';
import { Picture } from '../../shared/picture';
import { PictureService } from '../../shared/picture.service';

const IMAGES = [
  {'name': '432 Park Avenue', 'image': 'empire-feature2', 'description': 'xyz'},
  {'name': 'Central Park', 'image': 'empire-feature3', 'description': 'xyz'},
	{'name': 'Bank of America Building', 'image': 'empire-feature4', 'description': 'xyz'},
  {'name': 'One57', 'image': 'empire-feature8', 'description': 'xyz'},	
	{'name': '30 Rockefeller Plaza', 'image': 'empire-feature17', 'description': 'xyz'},
	{'name': '383 Madison Avenue', 'image': 'empire-feature29', 'description': 'xyz'},
	{'name': 'Chrysler Building', 'image': 'empire-feature6', 'description': 'xyz'},
	{'name': 'MetLife Building', 'image': 'empire-feature22', 'description': 'xyz'},
	{'name': 'Trump World Tower', 'image': 'empire-feature16', 'description': 'xyz'},
	{'name': '801 Lexington Avenue', 'image': 'empire-feature13', 'description': 'xyz'},
	{'name': 'One World Trade Center', 'image': 'empire-feature1', 'description': 'xyz'},
	{'name': 'Three World Trade Center', 'image': 'empire-feature5', 'description': 'xyz'},
	{'name': '30 Park Place', 'image': 'empire-feature15', 'description': 'xyz'},
	{'name': '8 Spruce Street', 'image': 'empire-feature11', 'description': 'xyz'},
	{'name': 'Met Life Tower', 'image': 'empire-feature51', 'description': 'xyz'},
	{'name': 'Statue of Liberty', 'image': 'empire-feature-liberty', 'description': 'xyz'},
	{'name': 'Ellis Island', 'image': 'empire-feature-ellis', 'description': 'xyz'},	{'name': 'United Nations Headquarters', 'image': 'empire-feature-un', 'description': 'xyz'},
	{'name': 'H-I-J-K-L', 'image': 'empire-feature-hijkl', 'description': 'xyz'},
	{'name': '4 Times Square', 'image': 'empire-feature21', 'description': 'xyz'},
	{'name': 'New York Times Building', 'image': 'empire-feature7', 'description': 'xyz'},
	{'name': 'Brooklyn', 'image': 'empire-feature-brooklyn', 'description': 'xyz'},
	{'name': 'Goldman Sachs Tower', 'image': 'empire-feature-goldman-sachs', 'description': 'xyz'},
	{'name': 'Staten Island', 'image': 'empire-feature-staten-island', 'description': 'xyz'},
	{'name': 'New Jersey', 'image': 'empire-feature-new-jersey', 'description': 'xyz'},
	{'name': 'Hudson River', 'image': 'empire-feature-hudson', 'description': 'xyz'},
	{'name': '10 Hudson Yards', 'image': 'empire-feature14', 'description': 'xyz'},
	{'name': 'One Penn Plaza', 'image': 'empire-feature31', 'description': 'xyz'},
	{'name': 'Madison Square Garden', 'image': 'empire-feature-msg', 'description': 'xyz'},
	{'name': 'Brooklyn Bridge', 'image': 'empire-feature-brooklyn-bridge', 'description': 'xyz'},								
 
];

@Component({
  selector: 'app-empire',
  templateUrl: './empire.component.html',
  styleUrls: ['../article.component.css'],
  providers: [PictureService]
})
export class EmpireComponent implements OnInit {

	subwayPictures: Picture[];
	empire80Pictures: Picture[];
	empire86Pictures: Picture[];
	midtownPictures: Picture[];
	date = "June 21, 2017";
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
	       
	constructor(private pictureService: PictureService) { }
	show: boolean = false;
	private value:any = {};
	private items:Array<any> = [];
	public refreshValue(value:any):void {
		this.value = value;
		this.show = true;
	}

	getPictures(): void {
		this.pictureService.getSubwayPictures().then(pictures => this.subwayPictures = pictures);	
		this.pictureService.getEmpire80Pictures().then(pictures => this.empire80Pictures = pictures);	
		this.pictureService.getEmpire86Pictures().then(pictures => this.empire86Pictures = pictures);
		this.pictureService.getMidtownPictures().then(pictures => this.midtownPictures = pictures);					
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
