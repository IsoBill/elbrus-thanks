/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import type { Student } from '../../app/type/Student';
import { useAppDispatch } from '../../redux/store';

type StudentItemProps = {
  student: Student;
};
// console.log(123);

export function StudentItem({ student }: StudentItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  // const students = useSelector((store: RootState) => store.students.students);

  const onhandlePlus = async (id: number): Promise<void> => {
    const responce = await fetch(`/api/student/${id}/thanks`, {
      method: 'PUT',
      headers: { 'Content-type': 'Application/json' },
      body: JSON.stringify({ thanks: student.thanks + 1 }),
    });

    const res: { message: string; student: Student } = await responce.json();
    console.log(res);
    dispatch({ type: 'students/update', payload: res.student });
  };
  const onhandleMinus = async (id: number): Promise<void> => {
    const responce = await fetch(`/api/student/${id}/thanks`, {
      method: 'PUT',
      headers: { 'Content-type': 'Application/json' },
      body: JSON.stringify({ thanks: student.thanks - 1 }),
    });

    const res: { message: string; student: Student } = await responce.json();
    console.log(res);
    dispatch({ type: 'students/update', payload: res.student });
  };
  return (
    <div className="StudentItem">
      <div>{student.name}</div>
      <button type="button" onClick={() => onhandlePlus(student.id)}>
        +
      </button>
      <div>{student.thanks}</div>
      <button type="button" onClick={() => onhandleMinus(student.id)}>
        -
      </button>
    </div>
  );
}

export default StudentItem;
