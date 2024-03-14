import type { SetStateAction } from 'react';
import React, { useContext, useState } from 'react';
import { Task } from '../../app/type/Student';
import { AppContext } from '../../app/type/providers/context';
import { useDispatch } from 'react-redux';

type FormUpdateAddProps = {
  task: Task;
  onClose: (value: SetStateAction<boolean>) => void;
};

function FormUpdate({ task, onClose }: FormUpdateAddProps): JSX.Element {
  const [text, setText] = useState(task.text);
  const dispatch = useDispatch();

  const onhadleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data: { message: string; task: Task } = await (
      await fetch(`/api/tasks/${task.id}/update`, {
        method: 'PUT',
        headers: {
          'Content-type': 'Application/json',
        },
        body: JSON.stringify({
          text,
        }),
      })
    ).json();

    if (data.message === 'success') {
      dispatch({ type: 'tasks/update', payload: data.task });
      onClose((prev) => !prev);
    }
  };

  return (
    <div className="FormMoviesAdd">
      <form onSubmit={onhadleSubmit}>
        <input
          type="text"
          placeholder="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormUpdate;
