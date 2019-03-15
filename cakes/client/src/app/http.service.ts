import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getCakes() {
    return this._http.get("/api/cakes");
  }
  getCake(id) {
    return this._http.get("/api/cakes/" + id);
  }
  addCake(cake) {
    return this._http.post("/api/cakes", cake);
  }
  deleteCake(id) {
    return this._http.delete("/api/delete/" + id);
  }
  addComment(id, comment) {
    return this._http.patch("/api/update/" + id, comment);
  }
}
