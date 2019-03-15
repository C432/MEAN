import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; 
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {
  new_author = {name:""}
  message: any;
  constructor(
    private _httpService:HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ){}

  ngOnInit() {
    this.new_author;
    this.message;
  }

  onSubmit(){
    let temp = this._httpService.postAuthor(this.new_author)
    temp.subscribe(data => {
      if(data['errors']){
        console.log(data['message'])
        this.message = data['message']
      }
      else{
        this.new_author = {name:""}
        this._router.navigate(['/home'])
      }
    })
  }
}
