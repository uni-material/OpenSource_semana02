import { Component } from '@angular/core';
import {NewsApiService} from "../../../news/services/news-api.service";
import {Router} from "@angular/router";
import {Source} from "../../../news/model/source.entity";
import {SourceListComponent} from "../../../news/components/source-list/source-list.component";
import {MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {LanguageSwitcherComponent} from "../language-switcher/language-switcher.component";
import {Article} from "../../../news/components/article-item/article-item.component";

@Component({
  selector: 'app-side-navigation-bar',
  standalone: true,
  imports: [
    SourceListComponent,
    MatSidenavContent,
    MatIconButton,
    MatIcon,
    MatSidenavContainer,
    MatToolbar,
    LanguageSwitcherComponent
  ],
  templateUrl: './side-navigation-bar.component.html',
  styleUrl: './side-navigation-bar.component.css'
})
export class SideNavigationBarComponent {

  sources: Array<Source> = [];
  articles: Array<Article> = [];

  constructor(private newsApi: NewsApiService,
              private logoApi: logoApiService,) {
  }

  searchArticlesForSource(source: any){
    console.log(`selected source is: ${source.id}`);
    this.newsApi.getArticlesBySourceId(source.id)
    .subscribe((data: any) => {
      this.articles = data['articles'];
      this.articles.forEach((article: {source: {urlToLogo: any; url: any; } }) =>{
        article.source.urlToLogo = source.urlToLogo;
        article.source.url = source.url;
      });
      console.log(this.articles);
    });
  }

  onSourceSelected(source: Source){
    console.log(source.name);
    this.searchArticlesForSource(source);
  }

  ngOnInit(): void{
    this.newsApi.getSources()
    .subscribe((data: any) => {
      this.sources = data['sources'];
      this.sources.forEach((source: {urlToLogo: string;}) =>
        source.urlToLogo = this.logoApi.getUrlToLogo(source));
      console.log(this.sources);
      this.searchArticlesForSource();
    })
    throw new Error('Method not implemented');
  }
}
