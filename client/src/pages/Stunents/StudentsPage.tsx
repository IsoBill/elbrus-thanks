/* eslint-disable import/no-named-as-default */
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
  const filteredStudents = useSelector((store: RootState) => store.students.filteredStudents);
  const dispatch = useAppDispatch();
  console.log(filteredStudents);

  const loadStudents = async (): Promise<void> => {
    const data: { message: string; students: Student[] } = await (
      await fetch('/api/student')
    ).json();

    dispatch({ type: 'students/load', payload: data.students });
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const phase1 = async (): Promise<void> => {
    const responce = await fetch('/api/student/phase1', {
      method: 'GET',
      headers: { 'Content-type': 'Application/json' },
    });
    const res: { message: string; students: Student[] } = await responce.json();
    console.log(res);
    dispatch({ type: 'students/load', payload: res.students });
  };
  const phase2 = async (): Promise<void> => {
    const responce = await fetch('/api/student/phase2', {
      method: 'GET',
      headers: { 'Content-type': 'Application/json' },
    });
    const res: { message: string; students: Student[] } = await responce.json();
    console.log(res);
    dispatch({ type: 'students/load', payload: res.students });
  };
  const phase3 = async (): Promise<void> => {
    const responce = await fetch('/api/student/phase3', {
      method: 'GET',
      headers: { 'Content-type': 'Application/json' },
    });
    const res: { message: string; students: Student[] } = await responce.json();
    // console.log(res);
    dispatch({ type: 'students/load', payload: res.students });
  };

  // const sortDown = async (): Promise<void> =>{
  //   const responce=await fetch("/api/student/sort",{method:"GET", headers: { 'Content-type': 'Application/json' },body:JSON.stringify({students})})
  // }

  return (
    <div className="StudentMain">
      <h2>Test</h2>
      <SearchForm />
      {/* <button type='button' onClick={sortDown}>sortDown</button>
      <button type='button'>sortup</button> */}

      <button type="button" onClick={phase1}>
        Phase1
      </button>
      <button type="button" onClick={phase2}>
        Phase2
      </button>
      <button type="button" onClick={phase3}>
        Phase3
      </button>
      {filteredStudents.length === 0
        ? students.map((student) => <StudentItem student={student} key={student.id} />)
        : filteredStudents.map((student) => <StudentItem student={student} key={student.id} />)}
    </div>
  );
}

export default StudentsPage;
