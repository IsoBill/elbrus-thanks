import type { Student, StudentId } from '../app/type/Student';
import type { User } from '../pages/Auth/reducer/type';

export type State = {
  students: Student[];
  filteredStudents?:  Student[]
};

export type Action =
  | {
      type: 'students/load';
      payload: Student[];
    }
  | {
      type: 'students/add';
      payload: Student;
    }
  | {
      type: 'students/remove';
      payload: StudentId;
    }
  | {
      type: 'students/update';
      payload: Student;
    }
  | { type: 'auth/login'; payload: User }
  | { type: 'auth/logout' }
  | { type: 'auth/userCheck'; payload: User }
  | { type: 'students/search'; payload: string };
