import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  places = ['Washington D.C.', ' Baltimore', ' New York '];
  photo = 'https://placehold.it/600x450/?text=East Coast Project';
}
