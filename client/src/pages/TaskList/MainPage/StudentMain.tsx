/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect } from 'react';
import { RootState } from '../../../redux/store';
import SearchForm from '../SearchForm/SearchForm';
import { Student } from '../../../app/type/Student';
import { useDispatch } from 'react-redux';
// import './StudentMain.scss';

type StudentMainProps = {};

export function StudentMain({}: StudentMainProps): JSX.Element {
//   const students = useSelector((store: RootState) => store.students);
  const dispatch = useDispatch();

  const loadStudents= async():Promise<void>=>{
    const data: { message: string; students:Student[] } = await (await fetch("/api/student")).json()
    console.log(data);
    dispatch({type:"students/load",payload:data.students})
    
  };

  useEffect(() => {
    loadStudents();
  }, []);
  

  return (

    <div className="StudentMain">
        <p>Test</p>
        <SearchForm />
      {students.map((student) => {
        <StudentItem student={student} key={student.id} />;
      })}
    </div>
  );
}

export default StudentMain;
