import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  _errors: '';
  _author: any =  {name: ''};


  constructor(private _http: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe(data => this.getInfo(data.get('id')));
  }
  getInfo(id) {
    const obs = this._http.getOne(id);
    obs.subscribe(data => {
      if (data === null || 'kind' in data) {
        this._router.navigate(['/home']);
      } else {
        this._author = data;
      }
    });
  }
  editAuthor() {
    const obs = this._http.editOne(this._author._id, this._author);
    obs.subscribe(data => {
      if ('errors' in data) {
        this._errors = data['errors']['name']['message'];
      } else {
        this._router.navigate(['/home']);
      }
    });
  }
}
