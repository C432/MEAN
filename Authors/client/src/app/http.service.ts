import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getOne(id) {
    return this._http.get('/api/authors/' + id);
  }
  getAll() {
    return this._http.get('/api/authors');
  }
  createOne(data) {
    return this._http.post('/authors', data);
  }
  editOne(id, data) {
    return this._http.patch('/authors/' + id, data);
  }
  deleteOne(id) {
    return this._http.delete('/authors/' + id);
  }
}
