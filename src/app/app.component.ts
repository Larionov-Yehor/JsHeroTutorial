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
  heroes: Hero[] = HEROES;
}

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[]=[
  {id: 2, name: 'Hlopec'},
  {id: 3, name: 'Pacanchik'},
  {id: 4, name: 'Bebchik'}
];
