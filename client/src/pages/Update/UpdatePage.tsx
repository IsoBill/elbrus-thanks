import React, { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { Student } from '../../app/type/Student';
import { useSelector } from 'react-redux';
import UpdateStudent from './UpdateStudent';
import FormAddStudent from './FormAddStudent';

export function UpdatePage(): JSX.Element {
  const students = useSelector((store: RootState) => store.students.students);
  const dispatch = useAppDispatch();

  const loadStudents = async (): Promise<void> => {
    const data: { message: string; students: Student[] } = await (
      await fetch('/api/student')
    ).json();

    dispatch({ type: 'students/load', payload: data.students });
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div className="UpdatePage">
      <h2>Update</h2>
      <FormAddStudent student={name} />
      {students.map((student) => (
        <UpdateStudent student={student} key={student.id} />
      ))}
    </div>
  );
}

export default UpdatePage;
