import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrls: ['./casino.component.css']
})
export class CasinoComponent implements OnInit {
@Output() goldCount: any;

  constructor() {}

  ngOnInit() {}
}
