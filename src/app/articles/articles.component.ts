import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from './articles.service';
import { NgFor } from '@angular/common';
import { article } from './article';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ NgFor],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {

  ThreeArticles : any = [];

  constructor(private articleService: ArticlesService, private router: Router) { }

  ngOnInit(): void {
    this.articleService.troisArticlesPlusRecentsObservable().subscribe(articles => {
      this.ThreeArticles = articles;
    });

   //this.ThreeArticles[0];
   // this.ThreeArticles[1];
    //this.ThreeArticles[2];
  }

  goToArticle(id: number) {
    this.router.navigate(['/article', id]);
  }

}
