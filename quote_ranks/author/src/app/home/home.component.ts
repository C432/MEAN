import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  authors: any;

  constructor(private _httpService: HttpService){} 

  ngOnInit() {
    this.authors
    this.get_Authors()
  }
  
  get_Authors(){
    let temp = this._httpService.getAuthors();  
    temp.subscribe(data => {
      this.authors = data
    })
  }

  delete_author(id){
    let temp = this._httpService.deleteAuthor(id);
    temp.subscribe(data => {
      this.get_Authors();
    })
  }
}
