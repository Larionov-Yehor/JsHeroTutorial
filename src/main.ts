import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {enableProdMode, Component} from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

@Component({
  template: '<h1>{{hero.name}} details!</h1>'

})

