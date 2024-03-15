import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';
import type { Student } from '../../app/type/Student';
import './Footer.scss';

export function FooterPage(): JSX.Element {
  const students = useSelector((store: RootState) => store.students.students);
  const dispatch = useAppDispatch();

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
    dispatch({ type: 'students/load', payload: res.students });
  };

  return (
    <div className="Footer">
      <button
        type="button"
        onClick={phase1}
        style={{
          backgroundImage: 'url(free-icon-number-1-10232683.png)',
        }}
      ></button>
      <button
        type="button"
        onClick={phase2}
        style={{
          backgroundImage: 'url(free-icon-number-2-10323683.png)',
        }}
      ></button>
      <button
        type="button"
        onClick={phase3}
        style={{
          backgroundImage: 'url(free-icon-number-3-10323781.png)',
        }}
      ></button>
    </div>
  );
}

export default FooterPage;
