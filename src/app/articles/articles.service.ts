import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { article } from './article';
import {ARTICLES} from './mock-article';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  troisArticlesPlusRecentsObservable(): Observable<article[]> {
    return of(ARTICLES).pipe(
      map(articles => {
        // Tri des articles par ordre décroissant de date de publication
        articles = articles.sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 3);
        console.log(articles);
        return articles;
      })
    )
  }


  ArticleById(id: number | undefined): Observable<article> {
    const article = ARTICLES.find(a => a.id === id);
    if (article !== undefined) {
      return of(article);
    } else {
      throw new Error('Article not found');
    }
  }

  GetALLArticles(): Observable<article[]> {
    return of(ARTICLES);
  }


  // Appel de la fonction pour obtenir l'Observable des 3 articles les plus récents






//getArticle(id: number | undefined): Observable<article> {
 // const article = ARTICLES.find(a => a.id === id);
 // if (article !== undefined) {
 //   return of(article);
//  } else {
  //  throw new Error('Article not found');
 // }
//}


getAllArticles(): Observable<article[]> {
  return of(ARTICLES);
}

  constructor() { }
}
