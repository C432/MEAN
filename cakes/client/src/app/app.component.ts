import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
@Input() newPhoto: any;

@Output() addPhoto: any;

constructor() {
}
ngOnInit(){
  console.log('yo mama!');
}
onAddPhoto(){
  console.log("on submit");
  this.addPhoto.emit();
}
// createCake() {
//   this._httpService.createACake(this.newCake).subscribe(data => {
//     console.log(data);
//     this.getCakesFromService();
//   });
// }
// getCakesFromService(){
//   const obs = this._httpService.getCakes();
//   obs.subscribe(data => {
//     this.allCakes = data;
//     console.log(this.allCakes);
//   });
// }
// rateCakeById(id){
//   const obs = this._httpService.rateCakeById(id);
//   obs.subscribe(data => {
//     this.oneCake = data;
//     console.log('Got one Cake!!!!!', data);
//   });
//   editCake(id) {
//     console.log('*****************************');
//     this._httpService.editACake(id, this.oldCake)
//       .subscribe(data => {
//           console.log(data);
//           this._httpService.getCakes();
//           this.resetOldCake();
//       });
//     }
// }
// deleteCake(id) {
//   this._httpService.deleteACake(id).subscribe(data => {
//     console.log(data);
//     this.getCakesFromService();
//   });
// }
}
