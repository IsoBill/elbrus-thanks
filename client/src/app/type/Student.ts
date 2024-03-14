export type Student = {
  id: number;
  name: string;
  phase: number;
  thanks: number;
};

export type StudentId = Student['id'];
