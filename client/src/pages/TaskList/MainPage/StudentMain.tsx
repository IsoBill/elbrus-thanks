import React from 'react';
import { RootState } from '../../../redux/store';
import SearchForm from '../SearchForm/SearchForm';
// import './StudentMain.scss';

type StudentMainProps = {};

export function StudentMain({}: StudentMainProps): JSX.Element {
  const students = useSelector((store: RootState) => store.students);
  const dispatch = useDispatch();

  const loadStudents= async():Promise<void>{
    const data: { message: string; students[] } = await (await fetch('api/tasks')).json();
    // setTasks(data.tasks);
    dispatch({ type: 'tasks/load', payload: data.students });
  };

  useEffect(() => {
    loadTasks();
  }, []);
  }

  return (

    <div className="StudentMain">
        <p>fdfd</p>
        <SearchForm />
      {students.map((student) => {
        <StudentItem student={student} key={student.id} />;
      })}
    </div>
  );
}

export default StudentMain;
