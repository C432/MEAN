import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})

export class NewAuthorComponent implements OnInit {
  name: String;
  errors: any;
  
  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
  }

  addAuthor()
  {
    var observable = this._httpService.postAuthor(this.name);
    observable.subscribe((data: any) => {
      console.log(data);
      if(data.error)
      {
        this.errors = data.error;
      }
      else
      {
        this._router.navigate(['/home']);
      }
    });
  }

}