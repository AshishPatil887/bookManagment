import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl="http://localhost:3000/users/"
  constructor(public http:HttpClient) { }


  ragister_books(data){
    return this.http.post(this.baseUrl + 'bookeagister',data)
    .pipe(map(response=>{
      return response
    }))
}

  get_booksList(){
    return this.http.get(this.baseUrl + 'booksList')
    .pipe(map(response=>{
      return response
    }))
}

singleBooksList(data){
  return this.http.post(this.baseUrl + 'singlebook',data)
  .pipe(map(response=>{
    return response
  }))

}

editBooks(data){
  return this.http.post(this.baseUrl + 'updatebook',data)
  .pipe(map(response=>{
    return response
  }))

}

BooksDelete(data){
  return this.http.post(this.baseUrl + 'deletebook',data)
  .pipe(map(response=>{
    return response
  }))

}

}