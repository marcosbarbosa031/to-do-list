import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoListType } from '../to-do-list/to-do-list.types';
import { ToDoDetailsType } from '.';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.scss']
})
export class ToDoDetailsComponent implements OnInit {
  @Input() toDo: ToDoListType;

  constructor() { }

  ngOnInit() {
  }

  addTask(event: any) {
    if (event.key === 'Enter' && event.target.value.length) {
      const task: ToDoDetailsType = {
        id: this.toDo.tasks.length,
        title: event.target.value,
        description: '',
        status: 'not done'
      };

      event.target.value = '';
      this.toDo.tasks.push(task);
    }
  }

  taskDone(task: ToDoDetailsType) {
    task.status = 'done';
    console.log(this.toDo);
  }

  deleteTask(id: number) {
    this.toDo.tasks = this.toDo.tasks.filter(task => task.id !== id);
  }

}
