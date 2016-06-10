import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Application1AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Application1AppComponent);

