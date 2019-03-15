import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    const obs = this._httpService.getAll();
    obs.subscribe((data: any[]) => this.authors = data);
  }
getAuthors() {
  const obs = this._httpService.getAll();
  obs.subscribe(data => {
    this.authors = data['authors'];
  });
}

deleteOne(id) {
  console.log('you clicked delete!!!', id);
const obs = this._httpService.deleteOne(id);
obs.subscribe(data => {
  console.log(data);
  // if (data.status === 'gucci') {
  //   this.ngOnInit();
  // } else {
  //   console.log('it didnt work!!!');
  // }

});
}
}
