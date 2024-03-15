/* eslint-disable import/no-named-as-default */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react';
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
  const [search, setSearch] = useState('');
  // console.log(filteredStudents);

  const loadStudents = async (): Promise<void> => {
    const data: { message: string; students: Student[] } = await (
      await fetch('/api/student')
    ).json();

    dispatch({ type: 'students/load', payload: data.students });
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const onHandleSwitch = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const target = e.target.value;
    console.log(target);

    setSearch(target);
    // console.log(target);
    dispatch({ type: 'students/search', payload: target });
  };

  // const sortDown = async (): Promise<void> =>{
  //   const responce=await fetch("/api/student/sort",{method:"GET", headers: { 'Content-type': 'Application/json' },body:JSON.stringify({students})})
  // }
// console.log( search.length !== 0);

  return (
    <div className="StudentMain">
      <h2>Test</h2>
      <div className="SearchForm">
        <input type="search" value={search} onChange={onHandleSwitch} />
      </div>

      {filteredStudents.length === 0 && search.length === 0
        ? students.map((student) => <StudentItem student={student} key={student.id} />)
        : filteredStudents.map((student) => <StudentItem student={student} key={student.id} />)}
    </div>
  );
}

export default StudentsPage;
