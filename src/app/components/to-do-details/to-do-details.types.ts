export type ToDoStatus = 'done' | 'not done';

export interface ToDoDetailsType {
  id: number;
  title: string;
  description: string;
  status: ToDoStatus;
}
