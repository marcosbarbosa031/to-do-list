import { Component, OnInit } from '@angular/core';
import { ToDoListType } from './to-do-list.types';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  title = 'Lists';
  toDoList: ToDoListType[] = [];

  constructor() { }

  ngOnInit() {
  }

  addList() {
    const list: ToDoListType = {
      id: this.toDoList.length + 1,
      title: '',
      description: '',
      todos: []
    };

    this.toDoList.push(list);
  }

  removeList(id: number) {
    this.toDoList.splice(id - 1, 1);
  }

}
