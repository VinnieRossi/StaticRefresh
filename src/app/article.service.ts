import { Injectable } from '@angular/core';
import { Article } from './article/article';

@Injectable()
export class ArticleService {

  constructor() { }

  private getDataStructures(): Article[] {
    return [{name: "Data Structure 1"}, {name: "Data Structure 2"}];
  }

  private getAlgorithms(): Article[] {
    return [{name: "Algorithm1"}, {name: "Algorithm2"}];
  }

  getArticles(contentType:string): Article[] {
    if (contentType === "algorithms") {
      return this.getAlgorithms();
    } else if (contentType === "data-structures") {
      return this.getDataStructures();
    }
  }

}
