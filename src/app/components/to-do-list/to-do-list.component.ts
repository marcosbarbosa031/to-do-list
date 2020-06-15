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

  async addList(element: HTMLElement) {
    const list: ToDoListType = {
      id: this.toDoList.length + 1,
      title: '',
      description: 'Nova lista...',
      todos: []
    };

    this.toDoList.push(list);
    await this.sleep(100);
    const titleInput = element.parentElement.parentElement.children[1].children[0].children[0] as HTMLElement;
    titleInput.focus();
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  disableInput(element: HTMLElement) {
    console.log(element);
    const hiddenTitle = element.parentElement.children[1];
    element.setAttribute('disabled', 'true');
    element.setAttribute('hidden', 'true');
    hiddenTitle.removeAttribute('hidden');
  }

  enableInput(element: HTMLElement) {
    const inputElement = element.parentElement.children[0] as HTMLElement;
    element.setAttribute('hidden', 'true');
    inputElement.removeAttribute('disabled');
    inputElement.removeAttribute('hidden');
    inputElement.focus();
  }

  endEdit(event) {
    if (event.key === 'Enter') {
      const element = event.target;
      const hiddenTitle = element.parentElement.children[1];
      element.setAttribute('disabled', 'true');
      element.setAttribute('hidden', 'true');
      hiddenTitle.removeAttribute('hidden');
    }
  }

  removeList(id: number) {
    this.toDoList.splice(id - 1, 1);
  }

}
