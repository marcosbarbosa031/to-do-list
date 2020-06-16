import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ToDoListType } from './to-do-list.types';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  title = 'Lists';
  @Input() toDoList: ToDoListType[];
  @Output() toDoListChange = new EventEmitter<ToDoListType[]>();
  @Output() selectToDo = new EventEmitter<ToDoListType>();

  constructor() { }

  ngOnInit() {
  }

  async addList(element: HTMLElement) {
    const id = this.toDoList.length + 1;
    const list: ToDoListType = {
      id,
      title: '',
      placeholder: 'New List...',
      selected: false,
      tasks: []
    };

    this.toDoList.push(list);
    this.toDoListChange.emit(this.toDoList);

    this.toDoList.forEach(l => {
      if (id === 1) {
        l.selected = true;
        this.selectToDo.emit(list);
      }
    });

    await this.sleep(100);
    const titleInput = element.parentElement.parentElement.children[1].children[id - 1].children[0].children[0] as HTMLElement;
    titleInput.focus();
  }

  disableInput(element: any, id: number) {
    const hiddenTitle = element.parentElement.children[1];
    this.toDoList.forEach(list => {
      if (element.value.length) {
        hiddenTitle.removeAttribute('hidden');
        element.setAttribute('disabled', 'true');
        element.setAttribute('hidden', 'true');
      } else {
        element.focus();
      }
    });
  }

  enableInput(element: HTMLElement) {
    const inputElement = element.parentElement.children[0] as HTMLElement;
    element.setAttribute('hidden', 'true');
    inputElement.removeAttribute('disabled');
    inputElement.removeAttribute('hidden');
    inputElement.focus();
  }

  endEdit(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const element = event.target as Element;
      const hiddenTitle = element.parentElement.children[1];
      element.setAttribute('disabled', 'true');
      element.setAttribute('hidden', 'true');
      hiddenTitle.removeAttribute('hidden');
    }
  }

  removeList(id: number) {
    this.toDoList = this.toDoList.filter(list => list.id !== id);
    this.toDoListChange.emit(this.toDoList);
  }

  selectList(list: ToDoListType) {
    this.toDoList.forEach(l => {
      if (l.id !== list.id) {
        l.selected = false;
      }
    });
    list.selected = true;
    this.selectToDo.emit(list);
  }

  private sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
