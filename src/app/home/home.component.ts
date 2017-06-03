import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  /*place() {
      let places = ['Washington D.C.', 'Baltimore', 'New York', 'Arlington', 'Laurel', 'Coatesville', 'Brooklyn', 'New Jersey'];
      let numberOne = Math.floor(Math.random() * places.length);
      let numberTwo = Math.floor(Math.random() * places.length);
      let numberThree = Math.floor(Math.random() * places.length);
      let items = `${places[numberOne]}, ${places[numberTwo]}, ${places[numberThree]} and more...`;  
      return items;
  }*/
  photo = 'https://placehold.it/600x450/?text=East Coast Project';
  name: string = "";

  submitted = false;

  onSubmit() { this.submitted = true; }

  onClear() {
    this.name =  "";
    this.submitted = false;
  }

}
