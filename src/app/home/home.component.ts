import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor(private cdr: ChangeDetectorRef) {}

  photo = 'https://placehold.it/600x450/?text=East Coast Project';
  name: string = "";
  items: string = '';

  submitted = false;

  onSubmit() {
    if (this.name.length <= 1) {
      return 
    } else {
      this.submitted = true; 
    }
  }

  onClear() {
    this.name =  "";
    this.submitted = false;
  }

  ngAfterViewInit() {
    let places = ['Washington D.C.', 'Baltimore', 'New York', 'Arlington', 'Laurel', 'Coatesville', 'Brooklyn', 'New Jersey'];
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
