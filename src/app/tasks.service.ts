import { Injectable } from '@angular/core';

interface Task {
  title: string;
}

// this is an object, we can create as many fields as we want

@Injectable()
export class TasksService {
  list: Array<Task> = [];
  constructor() {}

  getList() {
    return this.list;
  }

  add(title: string) {
    this.list.push({ title });
    // since each task is an object, we put title inside {}, task is the interface we created up there
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}
