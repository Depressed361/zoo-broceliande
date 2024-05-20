
import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  CarouselCaptionComponent,
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective
} from '@coreui/angular';
import { Observable, of } from 'rxjs';
import { article } from '../articles/article';
import { ArticlesService } from '../articles/articles.service';
import { ArticlesComponent } from '../articles/articles.component';
@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [ArticlesComponent,ThemeDirective, CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent, NgFor, CarouselItemComponent, CarouselCaptionComponent, CarouselControlComponent, RouterLink],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent implements OnInit{
  articles: any[] = [];

  constructor(private articlesService: ArticlesService
  ) { }
ngOnInit(): void {
  this.articlesService.troisArticlesPlusRecentsObservable().subscribe(articles => {
    this.articles = articles.map(article => ({
      id: article ? article.id : 0,
      title: article ? article.title : "",
      content: article ? article.content : "",
      date: article ? article.date : new Date(),
      image: article ? article.image : "",
    }));
  });


}
}

