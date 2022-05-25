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
}
