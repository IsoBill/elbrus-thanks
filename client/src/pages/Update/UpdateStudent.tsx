import React from 'react';
import { Student } from '../../app/type/Student';
// import './UpdateStudent.scss';

type UpdateStudentProps = {
  student: Student;
};

export const UpdateStudent = ({ student }: UpdateStudentProps): JSX.Element => {
  return (
    <>
      <div className="UpdateStudent">{student.name}</div>
      <a href={`/update/${student.id}`}>
        <button>Изменить</button>
      </a>
    </>
  );
};

export default UpdateStudent;
