import type { SetStateAction } from 'react';
import React, {  useState } from 'react';
import {type Student } from '../../app/type/Student';
import { useDispatch } from 'react-redux';

type FormUpdateAddProps = {
  student: Student;
  onClose: (value: SetStateAction<boolean>) => void;
};

function FormUpdate({ student, onClose }: FormUpdateAddProps): JSX.Element {
  const [text, setText] = useState(student.name);
  const dispatch = useDispatch();

  const onhadleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data: { message: string; student: Student } = await (
      await fetch(`/api/${student.id}/update`, {
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
      dispatch({ type: 'student/update', payload: data.student });
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
