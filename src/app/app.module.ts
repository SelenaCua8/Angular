import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';

import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
