import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor(private cdr: ChangeDetectorRef) {}

  photo = 'https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/photos/art4.jpg';
  photo2 = 'https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/photos/independence3.jpg';
  photo3 = 'https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/photos/pride26.jpg';
  photo4 = 'https://s3-us-west-2.amazonaws.com/nadm2.bodiewebdesign.com/photos/penn3.jpg';
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
