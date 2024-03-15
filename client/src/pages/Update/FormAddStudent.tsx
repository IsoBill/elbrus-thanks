import React, { useState } from 'react';
import type { Student } from '../../app/type/Student';
import { useAppDispatch } from '../../redux/store';
import './FormAddStudent.scss';

export function FormAddStudent(): JSX.Element {
  const [name, setName] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data: { message: string; student: Student } = await (
      await fetch('/api/student', {
        method: 'POST',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify({
          name,
        }),
      })
    ).json();
    if (data.message === 'success') {
      dispatch({ type: 'students/add', payload: data.student });
      setName('');
    } else {
      alert(data.message);
    }
  };
  return (
    <div className="FormAddStudent">
      <form onSubmit={handleSubmit} className="FormAdd">
        <input
          type="text"
          placeholder="Введите имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" style={{ marginLeft: '15px' }}>
          Добавить
        </button>
      </form>
    </div>
  );
}

export default FormAddStudent;
