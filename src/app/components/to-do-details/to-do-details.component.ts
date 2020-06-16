import { Component, OnInit, Input } from '@angular/core';
import { ToDoListType } from '../to-do-list/to-do-list.types';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.scss']
})
export class ToDoDetailsComponent implements OnInit {
  title = 'List of To Do';
  @Input() toDoList: ToDoListType[];

  constructor() { }

  ngOnInit() {
  }

}
