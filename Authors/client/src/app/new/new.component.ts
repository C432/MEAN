import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  errors: '';
  _author: {name: ''};

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  }
  makeAuthor() {
    const obs = this._httpService.createOne(this._author);
    obs.subscribe(data => {
      console.log(data);
      if ('errors' in data) {
        this.errors = data['errors']['name']['message'];
      } else {
        this._router.navigate(['/home']);
      }
    });
  }

}
