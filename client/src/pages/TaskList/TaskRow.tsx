import React, { useState } from 'react';
import './TaskRow.scss';
import { Task } from '../../app/type/Task';
import ModalWindow from './ui/modal/ModalPage';
import FormUpdate from './FormUpdate';
import { useDispatch } from 'react-redux';

type TaskRowProps = {
  task: Task;
};

export const TaskRow = ({ task }: TaskRowProps): JSX.Element => {
  const [isOpen, onClose] = useState(false);
  const dispatch = useDispatch();

  const onhadleUpdate = async (id: number): Promise<void> => {
    const data: { message: string; task: Task } = await (
      await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify({ status: !task?.status }),
      })
    ).json();

    if (data.message === 'success') {
      dispatch({ type: 'tasks/update', payload: data.task });
    }
  };

  const del = async (id: number): Promise<void> => {
    const data: { message: string } = await (
      await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
      })
    ).json();
    if (data.message === 'success') {
      dispatch({ type: 'tasks/remove', payload: id });
    }
  };

  return (
    <div className="TaskRow">
      <label>
        <input type="checkbox" checked={task.status} onChange={() => onhadleUpdate(task.id)} />
        <span className={task.status === true ? 'completed' : ''}>{task.text}</span>
        <button className="btn-delete" type="button" onClick={() => del(task.id)}>
          X
        </button>
        <button type="button" onClick={() => onClose((prev) => !prev)}>
          Редактировать
        </button>
        <ModalWindow isOpen={isOpen} onClose={onClose}>
          <FormUpdate task={task} onClose={onClose} />
        </ModalWindow>
      </label>
    </div>
  );
};

export default TaskRow;
