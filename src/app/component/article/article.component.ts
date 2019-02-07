import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-article',
  template: `
    <div>
      <h2>{{ article.title }}</h2>
    </div>
    <div>
          {{ article.description }}
    </div>
    <div>
          {{ article.date() }}
    </div>
    `
})
export class ArticleComponent implements OnInit {
  @Input() article: Article; 
  constructor() { }

  ngOnInit() {
  }

}
