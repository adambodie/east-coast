import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Untitled East Coast Project';
  places = ['Washington D.C.', ' Baltimore', ' New York '];
  photo = 'https://placehold.it/600x450/?text=East Coast Project';
}
