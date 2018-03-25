import { Component } from '@angular/core';
import { Article } from './article/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dataStructures: Article[] = [{name:"Article-1"}, {name: "Article-2"}];

  title = 'app';
}
