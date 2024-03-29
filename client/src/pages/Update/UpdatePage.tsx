import React, { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { Student } from '../../app/type/Student';
import { useSelector } from 'react-redux';
import UpdateStudent from './UpdateStudent';
import FormAddStudent from './FormAddStudent';
import FooterPage from '../Foooter/Footer';
import './UpdatePage.scss';

export function UpdatePage(): JSX.Element {
  const students = useSelector((store: RootState) => store.students.students);
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);

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

  // <div className="UpdatePage">
  //   <h2>Update page</h2>

  //   <FormAddStudent />
  //   {students.map((student) => (
  //     <UpdateStudent student={student} key={student.id} />
  //   ))}

  // </div>
  return (
    <div>
      {user ? (
        <>
          <div className="UpdatePage">
            <h2>Update page</h2>

            <FormAddStudent />
            {students.map((student) => (
              <UpdateStudent student={student} key={student.id} />
            ))}
          </div>
          <FooterPage />
        </>
      ) : (
        <div className="NoLog">
          <div>
            <a href="/" className="Anolog">
              Залогинься!
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdatePage;
