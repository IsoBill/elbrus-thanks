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
import './StudentsPage.scss';

export function StudentsPage(): JSX.Element {
  const students = useSelector((store: RootState) => store.students.students);
  const filteredStudents = useSelector((store: RootState) => store.students.filteredStudents);
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');
  const user = useSelector((store: RootState) => store.auth.user);
  console.log(user);

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

  return (
    <div>
      {user ? (
        <div className="StudentMain">
          <h2>Test</h2>
          <div className="SearchForm">
            <input
              type="search"
              value={search}
              placeholder="Кого ищем?"
              onChange={onHandleSwitch}
            />
          </div>

          {filteredStudents.length === 0 && search.length === 0
            ? students.map((student) => <StudentItem student={student} key={student.id} />)
            : filteredStudents.map((student) => <StudentItem student={student} key={student.id} />)}
        </div>
      ) : (
        <a href="/">Залогинься!</a>
      )}
    </div>
  );
}

export default StudentsPage;
