import { Component, OnInit, Input } from '@angular/core';
import { ToDoListType } from '../to-do-list/to-do-list.types';
import { ToDoDetailsType } from '.';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.scss']
})
export class ToDoDetailsComponent implements OnInit {
  @Input() toDo: ToDoListType;
  tasks: ToDoDetailsType[] = [];

  constructor() { }

  ngOnInit() {
  }

  addTask(event: any) {
    if (event.key === 'Enter') {
      const task: ToDoDetailsType = {
        title: event.target.value,
        description: '',
        status: 'not done'
      };

      event.target.value = '';
      this.tasks.push(task);
    }
  }

}
