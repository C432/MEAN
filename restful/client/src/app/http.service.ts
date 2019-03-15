import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getTasks() {
    return this._http.get('/api/tasks');
  }

  getTaskById(id) {
    return this._http.get('/api/tasks/' + id);
  }

  createATask(task) {
    return this._http.post('/api/tasks', task);
  }

  deleteATask(id) {
    return this._http.delete('/api/delete/' + id);
  }
  editATask(id, task) {
    return this._http.patch('/api/update/' + id, task);
  }
}
