import { Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

export const routes: Routes = [{
    path: 'home',
    component: ArticleComponent,
    data: [{
      pageName: 'Home Page',
      title: 'NewsFeed'
    }]
  }, {
  path: 'articleDetails',
  component: ArticleDetailsComponent,
  data: [{
    pageName: 'Article details',
    title: 'NewsFeed'
  }]
},
{ path: '', redirectTo: '/home', pathMatch: 'full' }];
