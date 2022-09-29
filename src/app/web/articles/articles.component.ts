import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

var articles = [
  {
    id: 1,
    name: 'hello world',
    description: 'hello world',
    data: `<h1>Test</h1>`
  },
  {
    id: 2,
    name: 'hello world',
    description: 'hello world',
    data: `<h1>Test</h1>`
  },
  {
    id: 3,
    name: 'hello world',
    description: 'hello world',
    data: `<h1>Test</h1>`
  }
];

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles_array = articles
  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-articles-data',
  templateUrl: './articles_data.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesDetaComponent implements OnInit {
  article_id: Number = 0;
  article_data: any = new Array()
  found_data = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.article_id = Number(this.route.snapshot.paramMap.get('id'))
    this.article_data = articles.find((act) => { return this.article_id == act.id })
    if (this.article_data != undefined) {
      this.found_data = true;
    } else {
      this.found_data = false;
    }
  }

}
