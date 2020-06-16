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
  toDo: ToDoListType = null;

  constructor() { }

  ngOnInit() {
  }

  updateToDoList(list: ToDoListType[]) {
    // let upatedToDo = null;
    // if (this.toDoList.length > 1) {
    //   upatedToDo =  list;
    //   const hasSelected = this.toDoList.filter(l => l.id === this.toDo.id);
    //   if (hasSelected.length && this.toDo.selected) {
    //     list[0].selected = true;
    //   }
    //   console.log('entrou length > 1');
    // } else {
    //   console.log('entrou length < 1');
    //   upatedToDo = this.toDoList.filter(l => l.id === this.toDo.id);
    //   this.toDo = upatedToDo[0] || null;
    // }
    this.toDoList = list;
  }

  updateToDo(toDo: ToDoListType) {
    this.toDo = toDo;
  }

}
