import { Student, StudentId } from '../type/Student';

export type State = {
  students: Student[];
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
    };
