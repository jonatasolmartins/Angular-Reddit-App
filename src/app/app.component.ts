import { Component } from '@angular/core';
import { Article } from './model/article';

@Component({
  selector: 'app-root',
  template: `
  <div id="container">
    <app-sidebar></app-sidebar>
    <div id="content">      
      <app-article *ngFor="let article of articles" [article]="article">
      </app-article>            
    </div>
  </div>
 `
})
export class AppComponent {
  articles: Article[];

  constructor(){
    this.articles = [
    new Article(
      'The Angular 2 screencast',
      'The easiest way to learn Angular 2'
    ),
    new Article(
      'Fullstack React',
      'Wanna learn React as well?'
    )]
  }

}

@Component({
  selector: 'app-sidebar',
  template: `
  <div id="sidebar">
  Sidebar will go here
  </div>
   `
})
export class SidebarComponent {}
