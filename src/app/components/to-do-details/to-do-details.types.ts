export type ToDoStatus = 'done' | 'not done';

export interface ToDoDetailsType {
  title: string;
  description: string;
  status: ToDoStatus;
}
