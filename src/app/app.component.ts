import { Component } from '@angular/core';

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
  articles: object[];

  constructor(){
    this.articles = [
    {
      title: 'The Angular 2 screencast',
      description: 'The easiest way to learn Angular 2'
    },
    {
      title: 'Fullstack React',
      description: 'Wanna learn React as well?'
    }]
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
