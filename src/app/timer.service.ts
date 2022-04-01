import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;

  constructor(public logger: LoggerService) {
    this.logger.add('TimerService constructor');
  }

  start(ms: number) {
    // qt of ms this counter will count
    if (!this.timer) {
      // if timer is null, we start
      this.timer = setInterval(() => {
        this.counter++;
      }, ms);
    }
  }

  // setinterval gets 2 params, one the function and the other the time of the interval, same as the one from JS

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      this.counter = 0;
    }
  }

  // if timer is counting (not null), we clear interval e set timer as null again and reset counter

  getCount() {
    return this.counter;
  }
}
