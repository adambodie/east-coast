import { Component } from '@angular/core';

@Component({
  selector: 'app-day-one',
  templateUrl: './day-one.component.html',
  styleUrls: ['./day-one.component.css']
})
export class DayOneComponent {
    pictures = [
    {id: 1, image: 'baltimore1.jpg', alt: 'MT&T Bank Stadium', title: "MT&T Bank Stadium", description: 'Home of the Baltimore Ravens'},
    {id: 2, image: 'baltimore2.jpg', alt: 'MT&T Bank Stadium', title: "MT&T Bank Stadium", description: 'I finally got a picture of the football stadium'},
    {id: 3, image: 'baltimore3.jpg', alt: 'Baltimore', title: "Welcome Back Baltimore", description: 'At least there\'s no Snow'},
    {id: 4, image: 'baltimore4.jpg', alt: 'Baltimore', title: "Welcome Back Baltimore", description: 'At least there\'s no Snow'},   
    ]

    piers = [
        {id: 1, image: 'pier1.jpg', alt: 'MT&T Bank Stadium', title: "MT&T Bank Stadium", description: 'Home of the Baltimore Ravens'},
    {id: 2, image: 'pier2.jpg', alt: 'MT&T Bank Stadium', title: "MT&T Bank Stadium", description: 'I finally got a picture of the football stadium'},
    {id: 3, image: 'pier3.jpg', alt: 'Baltimore', title: "Welcome Back Baltimore", description: 'At least there\'s no Snow'},
    {id: 4, image: 'pier4.jpg', alt: 'Baltimore', title: "Welcome Back Baltimore", description: 'At least there\'s no Snow'},   

    ]
}