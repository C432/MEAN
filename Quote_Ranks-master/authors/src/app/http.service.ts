import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors()
  {
    return this._http.get('/authors');
  }

  getAuthor(id)
  {
    return this._http.get('/authors/'+id);
  }

  postAuthor(name)
  {
    return this._http.post('/authors/new',{name: name});
  }

  putAuthor(id,name)
  {
    return this._http.put('/authors/edit/'+id,{name: name});
  }

  deleteAuthor(id)
  {
    return this._http.delete('/authors/remove/'+id);
  }

  postQuote(id,quote)
  {
    return this._http.post('/quotes/new',{id: id,quote: quote});
  }

  voteQuote(id,vote)
  {
    return this._http.put('/vote/'+id,{vote: vote});
  }

  deleteQuote(id)
  {
    return this._http.delete('/quotes/'+id);
  }

}
