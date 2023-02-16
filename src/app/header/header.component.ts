import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  currentTime: Date = new Date();
  currentDay: Date = new Date();


  ngOnInit(): void {
    setInterval(() => {
      this.getTime();
    }, 1000);
  }

  constructor() {}

  getTime() {
    this.currentTime.setSeconds(new Date().getSeconds());
    this.currentTime.setMinutes(new Date().getMinutes());
    this.currentTime.setHours(new Date().getHours());
  }
}