import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiDBService {
baseApiUrl = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient) { }
get(){
  return this.http.get(this.baseApiUrl);
}
}
