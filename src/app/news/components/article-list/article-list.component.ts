import {Component, Input} from '@angular/core';
import {ArticleItemComponent} from "../article-item/article-item.component";

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [
    ArticleItemComponent
  ],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class Article {
  title='CatchUp';

  @Input() articles!: Array<Article>;

}
