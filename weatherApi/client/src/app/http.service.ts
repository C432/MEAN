import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }
getWeather(city: String) {
  const apiKey = 'aef171498774cefe3cee8dcd65c4baa6';
  const url = 'https://openweathermap.org/api';



return this._http.get(url);
}
}
