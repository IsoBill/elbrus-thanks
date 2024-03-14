import React from 'react';
// import './StudentItem.scss';
import { Student } from '../../app/type/Student';

type StudentItemProps = {
  student: Student;
};

export function StudentItem({ student }: StudentItemProps): JSX.Element {
  return (
    <div className="StudentItem">
      <div>{student.name}</div>
    </div>
  );
}

export default StudentItem;
