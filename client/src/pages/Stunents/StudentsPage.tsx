/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';
import SearchForm from './SearchForm';
import type { Student } from '../../app/type/Student';
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

  // const sortDown = async (): Promise<void> =>{
  //   const responce=await fetch("/api/student/sort",{method:"GET", headers: { 'Content-type': 'Application/json' },body:JSON.stringify({students})})
  // }

  return (
    <div className="StudentMain">
      <h2>Test</h2>
      <SearchForm />
      {/* <button type='button' onClick={sortDown}>sortDown</button>
      <button type='button'>sortup</button> */}
      {students.map((student) => (
        <StudentItem student={student} key={student.id} />
      ))}
    </div>
  );
}

export default StudentsPage;
