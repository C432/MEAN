import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; 
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  id: any; 
  quotes: any;
  author: any;
  quote:any;
  vote: number;


  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
  ){}

  ngOnInit(){ 
    this.author = {name:""}
    this.getQuotes();
    this.id;
    this.quotes =[];
    this.vote;
  }

  getQuotes(){
    this._route.params.subscribe(params =>{
      this.id = params.id 
    })
    let temp = this._httpService.getAuthor(this.id)
    temp.subscribe(data =>{
      this.author = data;
      this.quotes = this.author.quotes
    })
  }

  deleteQuote(q_id){
    let temp = this._httpService.deleteQuote(q_id,this.author)
    temp.subscribe(data=>{
      this.getQuotes();
    })
  }


  voteUp(q_id){
    let temp = this._httpService.getQuote(q_id)
    temp.subscribe(data => {
      this.quote = data;
      this.vote = this.quote.vote
      this.vote ++;

      let temp2 = this._httpService.voteQuote(this.quote._id,this.vote)
      temp2.subscribe(data =>{
        console.log(data)
        this.getQuotes();
      })
    })
  }


  voteDown(q_id){

  }
}
