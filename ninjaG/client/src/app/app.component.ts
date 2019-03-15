import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @Input() goldCount: any;
  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {
    console.log('ngOnInit!!!', this._httpService.goldCount);
  }
}
