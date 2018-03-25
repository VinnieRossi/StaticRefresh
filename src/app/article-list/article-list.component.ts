import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article/article';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  @Input() contentType: string;
  articles: Article[];

  constructor(private _articleService: ArticleService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((param) => {
      this.articles = this._articleService.getArticles(param.contentType);
    });
  }
}
