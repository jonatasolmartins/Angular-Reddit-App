import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, SidebarComponent } from './app.component';
import { ArticleComponent } from './component/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
