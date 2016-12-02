
import {Component} from "@angular/core";
import {HeroService} from "./hero.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [HeroService]

  })
export class AppComponent{
title = 'Tour of heroes';

}
