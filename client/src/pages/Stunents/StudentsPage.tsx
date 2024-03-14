import React, { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import SearchForm from './SearchForm';
import { Student } from '../../app/type/Student';
import { useSelector } from 'react-redux';
import StudentItem from './StudentItem';

export function StudentsPage(): JSX.Element {
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
    <div className="StudentMain">
      <h2>Test</h2>
      <SearchForm />
      {students.map((student) => (
        <StudentItem student={student} key={student.id} />
      ))}
    </div>
  );
}

export default StudentsPage;
