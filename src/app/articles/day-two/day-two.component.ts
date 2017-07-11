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
		{title: "Wait, What?", link: "/two/delaware", image: "philadelphia1.jpg", paragraph: "Activated charcoal godard deserunt qui duis tempor XOXO. Fashion axe shaman vice mlkshk narwhal edison bulb af you probably haven't heard of them chambray XOXO health goth messenger bag cray unicorn. Irure aute adaptogen mustache wayfarers, chillwave mollit affogato activated charcoal tumeric sriracha blog XOXO coloring book. Voluptate pickled marfa eiusmod."},
		{title: "Independence Park", link: "/two/independence", image: "philadelphia1.jpg", paragraph: "3 wolf moon listicle pop-up artisan aute. Labore slow-carb nulla heirloom ramps, venmo woke quis austin. Trust fund 8-bit direct trade chicharrones asymmetrical XOXO farm-to-table subway tile biodiesel migas umami yr aliqua poutine neutra. Cliche selfies bitters woke. Try-hard blue bottle excepteur typewriter mixtape. "},
		{title: "Philly Pride", link: "/two/pride", image: "philadelphia1.jpg", paragraph: "Aliqua selfies cillum shoreditch farm-to-table succulents fixie brooklyn semiotics vape four loko. Retro aute wolf tempor, non occaecat ethical unicorn et celiac. Voluptate semiotics labore deserunt. Drinking vinegar YOLO slow-carb tattooed. Cornhole chillwave cronut street art. YOLO authentic occupy tumblr, vape put a bird on it squid raclette brooklyn enamel pin you probably haven't heard of them DIY poutine trust fund exercitation."},
		{title: "More to Philly", link: "/two/penn", image: "philadelphia1.jpg", paragraph: "Activated charcoal single-origin coffee in humblebrag portland everyday carry bushwick. Pitchfork wayfarers church-key roof party tbh banh mi, labore fixie occaecat esse yuccie synth. Bitters austin chillwave forage fam fingerstache est wayfarers actually. Lo-fi cred la croix ut biodiesel hashtag vaporware street art excepteur. Mustache proident ethical do minim unicorn health goth."},
		{title: "Art Museum", link: "/two/art", image: "philadelphia1.jpg", paragraph: "Microdosing ut offal adipisicing dolor hammock ut fingerstache keffiyeh trust fund hella readymade godard. Edison bulb dolore gastropub cred, jean shorts pitchfork 8-bit activated charcoal photo booth hashtag. Venmo magna authentic, coloring book polaroid cupidatat ad tumeric hell of man bun nisi kombucha. "}
	]
	constructor(private pictureService: PictureService) { }
	link = "https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/"; 
	ngOnInit() {
  
  }

}
