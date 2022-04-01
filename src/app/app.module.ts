import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TasksComponent } from './tasks/tasks.component';
import { LogComponent } from './log/log.component';
import { RouterModule } from '@angular/router';
import { TimerService } from './timer.service';
import { TasksService } from './tasks.service';
import { LoggerService } from './logger.service';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: TimerComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'log', component: LogComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TasksComponent,
    TimerComponent,
    LogComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TimerService, TasksService, LoggerService],
})
export class AppModule {}

/* to use dependencies or services, it needs to be added into "providers", if it doesnt exist inside NgModule, it must be created!! */
