import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import {FormsModule} from '@angular/forms';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent, ArticleComponent, ArticleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCarouselModule,
    BrowserModule.withServerTransition({ appId: 'ssr-NewsFeed' }),
    ServerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ServerAppModule { }
