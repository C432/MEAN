import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient){

  }
  getAuthors(){
    return this._http.get('/main')
  }
  postAuthor(data){
    return this._http.post('/main',data)
  }

  getAuthor(id){
    return this._http.get('/author/'+id)
  }
  putAuthor(id,data){
    return this._http.put('/author/'+id, data)
  }
  deleteAuthor(id){
    return this._http.delete('/author/'+id)
  }

  getQuote(id){
    return this._http.get('/quotes/'+id)
  }
  
  voteQuote(q_id,data){
    console.log(q_id, data)
    return this._http.put('/vote/'+q_id, data)
  }

  submitQuote(id,data){
    return this._http.post('/quotes/'+id, data)
  }

  deleteQuote(q_id,data){
    return this._http.put('/quotes/'+q_id, data)
  }
}
