import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:
  `
  <h1>{{id}}</h1>  
  `
  })
export class Hero{
  id: number;
  name: String;
}


hero: Hero = {
  id:1,
  name: 'Kent'
}
