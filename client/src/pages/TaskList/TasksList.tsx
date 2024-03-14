import React, { useEffect } from 'react';
import { Task } from '../../app/type/Task';
import TaskRow from './TaskRow';
import FormAddTask from './FormAddTask';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
// import './TasksList.scss';

export const TasksList = (): JSX.Element => {
  const dispatch = useDispatch();
  const tasks = useSelector((store: RootState) => store.tasks);
  const loadTasks = async (): Promise<void> => {
    const data: { message: string; tasks: Task[] } = await (await fetch('api/tasks')).json();
    // setTasks(data.tasks);
    dispatch({ type: 'tasks/load', payload: data.tasks });
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="TasksList">
      <FormAddTask />
      {tasks.map((e) => (
        <TaskRow task={e} key={e.id} />
      ))}
    </div>
  );
};

export default TasksList;
