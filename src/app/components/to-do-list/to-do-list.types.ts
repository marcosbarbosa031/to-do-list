import {ToDoDetailsType} from '../to-do-details';

export interface ToDoListType {
  id: number;
  title: string;
  placeholder: string;
  todos: ToDoDetailsType[];
}
