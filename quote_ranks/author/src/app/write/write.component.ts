import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; 
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})

export class WriteComponent implements OnInit {
  id: any;
  author:any;
  quote:any;
  message:any;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
  ){}

  ngOnInit(){
    this.getAuthor();
    this.id;
    this.author = {name:""};
    this.quote = {quote:""};
    this.message;
  }

  getAuthor(){
    this._route.params.subscribe(params =>{
      this.id = params.id
    });

    let temp = this._httpService.getAuthor(this.id)
    temp.subscribe(data=>{
      this.author = data;
    })
  }

  submitQuote(){
    let temp = this._httpService.submitQuote(this.id,this.quote);
    temp.subscribe(data=>{
      if(data['errors']){
        this.message= data['message']
      }
      else{
        this._router.navigate(['/']);
      }
    })
  }

}
