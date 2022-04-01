import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public timer: TimerService, public logger: LoggerService) {
    //this.timer.start(1000);
    this.logger.add('HomeComponent constructor');
  }

  ngOnInit() {}
}

// to use the timer, we need to "tell" this class it needs to use the timer
