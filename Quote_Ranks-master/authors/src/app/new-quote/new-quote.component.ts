import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  id: String;
  name: String;
  quote: String;
  errors: any;
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
      this.name = data.name;
    });
  }

  addQuote()
  {
    var observable = this._httpService.postQuote(this.id,this.quote);
    observable.subscribe((data: any) => {
      if(data.error)
      {
        console.log(data);
        this.errors = data.error;
      }
      else
      {
        this._router.navigate(['/quotes/'+this.id]);
      }      
    });
  }
}
