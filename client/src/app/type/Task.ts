export type Task = {
  id: number;
  text: string;
  status: boolean;
};

export type TaskId = Task['id'];
