import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; 
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author_id:any;
  author:any;
  message: any;

  constructor(
    private _httpService:HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ){}

  ngOnInit() {
    this.getAuthor()
    this.author_id;
    this.author= {name:""}
    this.message;
  }

  getAuthor(){
    this._route.params.subscribe(params =>{
      this.author_id = params.id 
    });

    let temp = this._httpService.getAuthor(this.author_id);
    temp.subscribe(data => {
      this.author = data
      console.log(data)
    })
  }

  onSubmit(){
    let temp = this._httpService.putAuthor(this.author_id, this.author)
    temp.subscribe(data => {
      if(data['errors']){  
        console.log(data)
        this.message = data['message']
      }
      else{
        this._router.navigate(['/']);
      }
    })
  }
}

