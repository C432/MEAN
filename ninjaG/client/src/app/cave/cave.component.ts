import { Component, OnInit, Output } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cave',
  templateUrl: './cave.component.html',
  styleUrls: ['./cave.component.css']
})
export class CaveComponent implements OnInit {
@Output() goldCount: any;

  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {

  }
  caveGold() {
    const cave = Math.floor((Math.random() * 5) + 5);
    this._httpService.goldCount += cave;
    console.log('this gold count is', this.goldCount);
}
}
