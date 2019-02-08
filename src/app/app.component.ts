import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div id="container">
    <app-sidebar></app-sidebar>
    <app-article-list></app-article-list>    
  </div>
  `
})
export class AppComponent {}
