import { Task, TaskId } from '../type/Student';

export type State = {
  tasks: Task[];
};

export type Action =
  | {
      type: 'tasks/load';
      payload: Task[];
    }
  | {
      type: 'tasks/add';
      payload: Task;
    }
  | {
      type: 'tasks/remove';
      payload: TaskId;
    }
  | {
      type: 'tasks/update';
      payload: Task;
    };
