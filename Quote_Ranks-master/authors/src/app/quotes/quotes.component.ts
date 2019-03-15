import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  id: String;
  name: String;
  quotes: {id: String,quote: String,votes: number};
  private sub: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      this.id = params['id'];
      this.getAuthor();
    });
  }

  getAuthor()
  {
    var observable = this._httpService.getAuthor(this.id);
    observable.subscribe((data: any) => {
      console.log(data);
      this.name = data.name;
      this.quotes = data.quotes;
    });
  }

  deleteQuote(quote_id)
  {
    var observable = this._httpService.deleteQuote(quote_id);
    observable.subscribe((data: any) => {
      this.getAuthor();
    });    
  }

  voteQuote(quote_id,vote)
  {
    var observable = this._httpService.voteQuote(quote_id,vote);
    observable.subscribe((data: any) => {
      this.getAuthor();
    });    
  }

}
