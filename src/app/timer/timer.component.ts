import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  sec: number;
  constructor(public timer: TimerService) {
    this.sec = 0;
  }

  ngOnInit() {}

  setTime(value: number) {

  }
}
