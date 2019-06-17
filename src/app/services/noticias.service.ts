import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaNoticias } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias() {
   return this.http.get<RespuestaNoticias>(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-05-17&sortBy=publishedAt&apiKey=4e9e36b5f4df49fea22e7d6e580ee89f`);
  }
}
