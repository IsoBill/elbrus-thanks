import type { SetStateAction } from 'react';
import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import {type Student } from '../../../app/type/Student';

type FormUpdateAddProps = {
  student: Student;
  onClose: (value: SetStateAction<boolean>) => void;
};

function FormUpdate({ student, onClose }: FormUpdateAddProps): JSX.Element {
  const [name, setName] = useState(student.name);
  const [phase, setPhase] = useState(student.phase);
  const dispatch = useDispatch();

  const onhadleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data: { message: string; student: Student } = await (
      await fetch(`/api/${student.id}`, {
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
    <div className="FormStudentAdd">
      <form onSubmit={onhadleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="phase"
          value={phase}
          onChange={(e) => setPhase(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormUpdate;
