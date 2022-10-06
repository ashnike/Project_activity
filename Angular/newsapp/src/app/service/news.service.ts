import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  api_key = 'cd5a06a4eeaa431189560d2b91e39693';
  constructor(private http:)HttpClient {}
  initSources(){
    return this.http.get('https://newsapi.org/v2/everything?q=keyword&apiKey='+ this.api_key)
  }
  getArticlesByid(source:string){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key)
  }
  initArticles(){
    return this.http.get()
  }
}
