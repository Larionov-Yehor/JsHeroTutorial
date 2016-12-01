import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  })
export class AppComponent{

  hero: Hero = {
    id:1,
    name: 'Kent'
  }

}
export class Hero {
  id: number;
  name: string;
}

