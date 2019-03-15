import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = [];

  title = 'app';

  allTasks: any;
  oneTask: any;
  newTask: any;
  oldTask: any;
  // showInfo: boolean;
  constructor(private _httpService: HttpService) {
    // this.getTasksFromService();
    // this.getTaskById('5b4800ad284d24487d55fa20');
    this.oldTask = {
      title : ' ',
      description : ' '
    };
  }


  ngOnInit() {
    console.log('yo mama');
  //   this.getTasksFromService();
    // this.new_task = ( name: "", url: "")
    // this.showInfo = false;
    this.newTask = { title: '', description: '' };
    this.oldTask = { title: '', description: '' };
  }


  resetOldTask() {
    this.oldTask = {
      title : ' ',
      description : ' ',
    };

    this.newTask = {
      title : ' ',
      description : ' ',
    };
  }

  createTask() {
    this._httpService.createATask(this.newTask).subscribe(data => {
      console.log(data);
      this.getTasksFromService();

    });
  }
  getTasksFromService() {
    // this.showInfo = !this.showInfo;
    const tempObservable = this._httpService.getTasks();
    tempObservable.subscribe(data => {
      this.allTasks = data;
      console.log(this.allTasks);
    });
  }
  getTaskById(id) {
    // this.showInfo = !this.showInfo;
    const tempObservable = this._httpService.getTaskById(id);
    tempObservable.subscribe(data => {
      this.oneTask = data;
      console.log('Got One Task!', data);
  });
}
  editTask(id) {
    console.log('*****************************');
    console.log(id);

    this._httpService.editATask(id, this.oldTask)
      .subscribe(data => {
          console.log(data);
          this._httpService.getTasks();
          this.resetOldTask();
      });
    // let tempObservable = this._httpService.editATask(id, this.oldTask);
    // tempObservable.subscribe(data => {
    //   console.log('this' + id + 'has been edited!');
    //   this.getTasksFromService();
    // });
    // this.oldTask = { title: '', description: '' };
  }
deleteTask(id) {
  this._httpService.deleteATask(id).subscribe(data => {
    console.log(data);
    console.log('this' + id, ' is toast!');
    this.getTasksFromService();
  });
}
}
