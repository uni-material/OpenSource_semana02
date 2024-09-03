import {Component, Input} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitleGroup} from "@angular/material/card";

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [
    MatCardActions,
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardContent
  ],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class Article {
  @Input() article!: Article;


}
