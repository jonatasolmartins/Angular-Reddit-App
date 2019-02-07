import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  template: `
    <div>
      <h2>{{ article.title }}</h2>
    </div>
    <div>
          {{ article.description }}
    </div>
    `
})
export class ArticleComponent implements OnInit {
  @Input() article: object; 
  constructor() { }

  ngOnInit() {
  }

}
