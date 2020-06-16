import { Component, OnInit } from '@angular/core';
import { ToDoListType } from 'src/app/components/to-do-list/to-do-list.types';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  title = 'DoTasks';
  toDoList: ToDoListType[] = [];

  constructor() { }

  ngOnInit() {
  }

  updateToDoList(list: ToDoListType[]) {
    this.toDoList = list;
    console.log('list:', this.toDoList);
  }

}
