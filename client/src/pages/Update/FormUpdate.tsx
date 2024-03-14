import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Student } from '../../app/type/Student';

type FormUpdateAddProps = {
  student: Student;
};

function FormUpdate({ student }: FormUpdateAddProps): JSX.Element {
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
          name,
          phase,
        }),
      })
    ).json();

    if (data.message === 'success') {
      dispatch({ type: 'student/update', payload: data.student });
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
