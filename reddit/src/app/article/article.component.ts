import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
import { Article } from './article.model'; //Non cancellare gli altri import

export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card';
  article:Article

  constructor() {
    this.article = new Article('Angular 2','http://angular.io',10);
  }

  voteUp(): Boolean {
    this.article.votes += 1; //accediamo alla proprietà votes di article
    return false; //Non propagare l'evento
  }

  voteDown():Boolean {
    this.article.votes -= 1;
    return false; //Non propagare l'evento
  }
ngOnInit() {}
}
