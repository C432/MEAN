import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}


  createMovie(data) {
    return this._http.post('/api/movies', data);
  }
  allMovies() {
    return this._http.get('/api/movies');
  }
  oneMovie(id) {
    return this._http.get('/api/movies/' + id);
  }
  deleteOne(id) {
    return this._http.delete('/api/movies/' + id);
  }

}
