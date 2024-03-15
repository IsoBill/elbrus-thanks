/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { SetStateAction, useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { Student } from '../../app/type/Student';

type FormUpdateAddProps = {
  student: Student;
  onClose: (value: SetStateAction<boolean>) => void;
};

function FormUpdate({ student, onClose }: FormUpdateAddProps): JSX.Element {
  const [name, setName] = useState(student.name);
  const [phase, setPhase] = useState(student.phase);
  const dispatch = useAppDispatch();

  const onhadleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data: { message: string; student: Student } = await (
      await fetch(`/api/student/${student.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'Application/json',
        },
        body: JSON.stringify({
          name,
          phase,
        }),
      })
    ).json();

    if (data.message === 'success') {
      dispatch({ type: 'students/update', payload: data.student });
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
          type="number"
          min={1}
          max={3}
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
