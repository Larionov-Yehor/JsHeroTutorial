import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero-details/hero";
import {HeroService} from "../hero.service";


@Component({
  moduleId: module.id.toString(),
  selector: 'my-dashboard',
  template: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

    ngOnInit(): void{
      this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1,5));
    }
  }
