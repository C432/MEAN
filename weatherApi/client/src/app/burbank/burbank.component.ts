import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {


  weather: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      console.log(params);
      this.getWeather();
    });
  }

getWeather() {
  const obsWeather = this._httpService.getWeather('Burbank');
  obsWeather.subscribe(data => {
    this.weather = data;
    console.log(data);
  });
}
goHome() {
  this._router.navigate(['/home']);
}
}
