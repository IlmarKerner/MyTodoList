import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentTime: Date = new Date();
  currentDay: Date = new Date();
  @ViewChild('todoContainer')
  todoContainer!: ElementRef;

  ngOnInit(): void {
    setInterval(() => {
      this.getTime();
      this.getDate();
    }, 1000);
  }

  constructor() {}

  getSeconds() {
    return ('0' + this.currentTime.getSeconds()).slice(-2); // 05
  }

  getMinutes() {
    return ('0' + this.currentTime.getMinutes()).slice(-2);
  }

  getHours() {
    return ('0' + this.currentTime.getHours()).slice(-2);
  }

  getDate() {
    return ('0' + this.currentDay.getDate()).slice(-2);
  }

  getMonth() {
    switch (this.currentDay.getMonth()) {
      case 0:
        return 'January';
      case 1:
        return 'February';
      case 2:
        return 'March';
      case 3:
        return 'April';
      case 4:
        return 'May';
      case 5:
        return 'June';
      case 6:
        return 'July';
      case 7:
        return 'August';
      case 8:
        return 'September';
      case 9:
        return 'October';
      case 10:
        return 'November';
      case 11:
        return 'December';
      default:
        return '';
    }
  }

  getFullYear() {
    return this.currentDay.getFullYear();
  }

  getTime() {
    this.currentTime.setSeconds(new Date().getSeconds());
    this.currentTime.setMinutes(new Date().getMinutes());
    this.currentTime.setHours(new Date().getHours());
  }

  date() {
    this.currentDay.getDate();
    this.currentDay.getMonth();
    this.currentDay.getFullYear();
  }

  
  saveTodo() {

  }
}


