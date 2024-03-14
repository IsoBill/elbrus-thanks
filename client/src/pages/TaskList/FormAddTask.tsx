import React, { useContext, useState } from 'react';
import { Task } from '../../app/type/Task';
import { AppContext } from '../../app/type/providers/context';
import { useDispatch } from 'react-redux';
// import './FormAddTask.scss';

export const FormAddTask = (): JSX.Element => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data: { message: string; task: Task } = await (
      await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify({
          text,
          status: false,
        }),
      })
    ).json();
    if (data.message === 'success') {
      // setTasks((tasks) => [...tasks, data.task]);
      dispatch({ type: 'tasks/add', payload: data.task });
      setText('');
    }
  };
  return (
    <div className="FormAddTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" style={{ marginLeft: '15px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormAddTask;
