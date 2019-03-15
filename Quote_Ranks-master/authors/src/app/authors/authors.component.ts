import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})

export class AuthorsComponent implements OnInit {
  authors: {_id: String,name: String}[] = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit()
  {
    this.getAuthors()
  }

  getAuthors()
  {
    var observable = this._httpService.getAuthors();
    observable.subscribe((data: any) => {
      this.authors = data;
    });
  }

  deleteAuthor(id)
  {
    var observable = this._httpService.deleteAuthor(id);
    observable.subscribe((data: any) => {
      this.getAuthors();
    });
  }

}
