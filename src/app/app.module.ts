import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { TimerService } from './timer.service';
import { TimerComponent } from './timer/timer.component';
import { DisciplinasService } from './disciplinas.service';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: TimerComponent },
      { path: 'disciplinas', component: DisciplinasComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TimerComponent,
    DisciplinasComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TimerService, DisciplinasService],
})
export class AppModule {}

/* to use dependencies or services, it needs to be added into "providers", if it doesnt exist inside NgModule, it must be created!! */
