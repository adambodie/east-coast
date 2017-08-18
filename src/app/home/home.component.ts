import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor(private cdr: ChangeDetectorRef) {}
  link = 'https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/';
  name: string = "";
  location: string = "";
  items: string = '';

  submitted = false;

  onSubmit() {
    if (this.name.length <= 1 || this.location.length <=4) {
      alert("Please try again"); 
    } else {
      this.submitted = true; 
    }
  }

  onClear() {
    this.name =  "";
    this.location =  "";
    this.submitted = false;
  }

  features = [
		{	
			title: "Intro", 
			link: "/intro", 
			image: "intro4.jpg", 
			paragraph: "The first part of the trip is always the most anxious.  You're so excited and anticipating of the events ahead.  Check out the best moments from our flight to Baltimore and first thoughts of Maryland by clicking the link below."
		},  
		{	
			title: "Baltimore", 
			link: "/one", 
			image: "baltimore10.jpg", 
			paragraph: "The first night in Maryland was not one to rest.  So we went to Baltimore and visited the Harbor during the night.  A different experience from my first trip to Baltimore in the snow, click the link to have fun in the night in Baltimore."
		},
		{	
			title: "Wait, What?", 
			link: "/two/delaware", 
			image: "philadelphia9.jpg", 
			paragraph: "The trip from Maryland to Philadelphia is a two hour drive.  Naturally, getting there is half the battle.  Also apparent is that the quickest route to Philadelphia involves entering Delaware.  Click the link below to read about the journey through Northern Maryland and Delaware before culminating into Pennsylvania."
		},
		{
			title: "Independence Park", 
			link: "/two/independence", 
			image: "independence11.jpg", 
			paragraph: "Philadelphia is rich in Colonial United States history.  One of the oldest cities in the United States, it is home of Independence Hall and the Liberty Bell.  Click below to see and read about the famed historical sights that Philadelphia is world famous for."
		},
		{
			title: "Philly Pride", 
			link: "/two/pride", 
			image: "pride27.jpg", 
			paragraph: "There's a reason Philadelphia is nicknamed the City of Brotherly Love.  Our trip to Philadelphia coincided with the Philly Pride Parade for the LGBTQ community which deserves the same rights as anyone else.  Check out Pictures, Videos and other tidbits by clicking the link below."
		},
		{
			title: "More to Philly", 
			link: "/two/penn", 
			image: "penn4.jpg", 
			paragraph: "After the Pride parade was over, it was time to eat and check out nearby attractions.  Located close to Penn's Landing, this made it a perfect place to explore after eating lunch.  To dig deeper in Philadelphia, click the link below."
		},
		{
			title: "Art Museum", 
			link: "/two/art", 
			image: "art21.jpg", 
			paragraph: "Standing at 5 feet, 10 inches and weighing 216 pounds is Philadelphia's favorite champion, Rocky Balboa.  Making the classic Philadelphia Museum of Art and worldwide attraction for all things Rocky, who ran up the Rocky Steps en route to being America's favorite fictional boxer, click below to see our adventures doing the Rocky experience, and more..."
		},
		{
			title: "Goodbye Philly", 
			link: "/two/philly", 
			image: "philadelphia35.jpg", 
			paragraph: "All good things must come to an end.  And that was true for Philadelphia.  I would have loved to stay, but we had bigger fish to fry.  Relive our departure from Philadelphia by clicking the link below."
		},  
		{	
			title: "U.S. Capitol", 
			link: "/three/capitol", 
			image: "capitol19.jpg", 
			paragraph: "Visiting the Nation's Capital means seeing where are government allegedly works.  Home of our current Incompetent Republican controlled Congress, check out where our Congress used to do work.  A beautiful outside makes up for a lack of progress.  After all, Progress is the opposite of Congress."
		},
		{
			title: "Georgetown", 
			link: "/three/georgetown", 
			image: "potomac15.jpg", 
			paragraph: "Nothing says style in D.C. more than visiting Georgetown, the more hip part of D.C., where no Government is involved in making decisions (not that they have made any recently).  Also hip is living on the Potomac River in a house boat.  With a friend of a friend living on a boat in the river, these areas are what gives D.C. its hipness."
		},  
  		{	
			title: "Arlington National Cemetery", 
			link: "/four/arlington", 
			image: "arlington20.jpg", 
			paragraph: "Never having found a place in Virginia to visit, I naturally needed to go to Virginia at least once on this trip.  That brought us to the Arlington National Cemetery, home of thousands upon thousands of graves, honoring those who fought for America and served our country well.  If you want to see pictures of graves and tombstones, this is the perfect place to see them."
		},
		{
			title: "Metro", 
			link: "/four/metro", 
			image: "metro2.jpg", 
			paragraph: "Travelling throughout the D.C. Metro can be hectic with all the people there.  Traffic can make some travel downright impossible at times.  With the car in the shop, public transportation was essential. Thankfully, there's the Metro.  Here you'll find our travels from Virginia to Maryland while travelling the Metro.  "
		},
		{	
			title: "New Jersey", 
			link: "/five/jersey", 
			image: "jersey3.jpg", 
			paragraph: "And just like that, it was ready to leave Maryland and head to the Big Apple, the biggest city of them all, New York City.  Of course, that meant having to go through the Joke State, New Jersey.  Check out the nothingness of New Jersey, from the trees on the highway, the extremely fast and rude drivers, and the joke that is New Jersey.  Click below to get through New Jersey, by the time you're done, you'll have a worse opinion of the state than their residents do of their lousy Governor Chris Christie."
		},
		{
			title: "Welcome to New York City", 
			link: "/five/welcome-nyc", 
			image: "katz2.jpg", 
			paragraph: "There's no city like New York City.  It's true the moment you enter the city.  Check out our first thoughts upon entering the Big Apple as we headed to Katz's Deli to see us in our Empire State of Mind (thanks JAY-Z).  Click the link below to see our first New York pictures."
		},
		{
			title: "Empire State Building", 
			link: "/five/empire", 
			image: "empire24.jpg", 
			paragraph: "Perhaps the most iconic building in the United States is the classic Empire State Building, whose classic architecture and incredibly tall height make it the crown jewel of New York City, with amazing views all throughout New York City (and New Jersey, but who cares about Jersey).  Check out New York from above at the Empire State Building by clicking the link below."
		},
		{
			title: "The Lady and President Tramp", 
			link: "/five/tramp", 
			image: "tramp2.jpg", 
			paragraph: "New York is home of the worst person in the world, Donald Trump.  So naturally, watching a ventriloquist act making fun of the world's worst person would be a delight.  With a friend of a friend of a friend performing, nothing states the uniqueness more than seeing an Off-Broadway show in the Greenwich Village, New York City's Gay District.  Hate Trump?  Click below."
		},		{	
			title: "Lower East Side", 
			link: "/six/les", 
			image: "les8.jpg", 
			paragraph: "New York City is not all glamour and gold.  There are plenty of spots in New York for the ordinary people.  Click below to see my adventures walking through the Lower East Side and enjoying the simpler things in New York.  Candy not included."
		},
		{
			title: "9/11 Memorial", 
			link: "/six/wtc", 
			image: "wtc11.jpg", 
			paragraph: "One of the worst days in American History, definitely one of the worst in my lifetime, was the horrific attacks on 9/11.  Being in New York City, right where the attacks occurred, makes it all the more emotional.  Click the link to see how New York honored the lives lost on 9/11."
		},
		{
			title: "Statue of Liberty", 
			link: "/six/liberty", 
			image: "liberty60.jpg", 
			paragraph: "Built in 1886, the Statue of Liberty is one of New York's premier destinations, a symbol of liberty and a welcoming sign for all, from the immigrants who make their way to America, to those who love our country.  Click below to see the adventures at the Statue of Liberty."
		},
		{
			title: "Times Square", 
			link: "/six/times", 
			image: "times76.jpg", 
			paragraph: "No place in America provides more excitement in a little place more than Times Square, the crossroads of the world to many who visit just to have a good time.  See the zany adventures at Times Square by clicking the link below."
		},
		{	
			title: "Outro", 
			link: "/outro", 
			image: "outro25.jpg", 
			paragraph: "Flying home is the least exciting part of any trip.  You're finished and just want to relax from a long and exciting trip.  Check out the last pictures of the trip by clicking the link below."
		}, 		
]
    numberFour = Math.floor(Math.random() * this.features.length);
    numberFive = Math.floor(Math.random() * this.features.length);
    numberSix = Math.floor(Math.random() * this.features.length);
	numberSeven = Math.floor(Math.random() * this.features.length);
	

	
	ngAfterViewInit() {
		let places = ['Washington D.C.', 'Baltimore', 'New York', 'Arlington', 'Laurel', 'Philadelphia', 'Delaware', 'New Jersey'];
		let numberOne = Math.floor(Math.random() * places.length);
		let numberTwo = Math.floor(Math.random() * places.length);
		while (numberOne === numberTwo) {
		  numberTwo = Math.floor(Math.random() * places.length);
		}
		let numberThree = Math.floor(Math.random() * places.length);
		while (numberOne === numberThree || numberTwo === numberThree) {
		  numberThree = Math.floor(Math.random() * places.length);
		}
		this.items = `${places[numberOne]}, ${places[numberTwo]}, ${places[numberThree]} and more...`;
		this.cdr.detectChanges();
    
    
  }
}
