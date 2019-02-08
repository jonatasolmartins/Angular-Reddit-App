import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-article-list',
  template:`
  <div id="content">      
      <app-article *ngFor="let article of articles" [article]="article">
      </app-article>            
  </div>
  `
})
export class ArticleListComponent implements OnInit {
  
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

  ngOnInit() {
  }

}
