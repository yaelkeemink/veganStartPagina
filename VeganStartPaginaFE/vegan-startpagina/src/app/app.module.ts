import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WordVeganComponent } from './WordVegan/WordVegan.component';
import { HomeComponent } from './Home/Home.component';


@NgModule({
  declarations: [	
    AppComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'wordvegan', component: WordVeganComponent},
      {path: '', component: HomeComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
