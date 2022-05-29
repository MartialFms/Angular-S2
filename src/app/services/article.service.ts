import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article } from '../model/article';
import { HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }

  public getArticles(){
    return this.http.get<Article[]>(environment.host+"/articles")
  }

  public createArticle(article : Article){
    return this.http.post(environment.host+"/users/create", article)
  }


  public deleteArticle(article : Article){
  return this.http.delete(environment.host+"/users/"+article.id )}
}
