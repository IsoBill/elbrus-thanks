import React, { useState } from 'react';
import type { Student } from '../../app/type/Student';
import { useAppDispatch } from '../../redux/store';


type FormUpdateAddProps = {
  student: Student;
};

export function FormAddStudent({ student }: FormUpdateAddProps): JSX.Element {
  const [name, setName] = useState(student.name);
  const dispatch = useAppDispatch();
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      const data: { message: string; student: Student } = await (
        await fetch('/api', {
          method: 'POST',
          headers: { 'Content-type': 'Application/json' },
          body: JSON.stringify({
            name
          }),
        })
      ).json();
      if (data.message === 'success') {
        dispatch({ type: 'students/add', payload: data.student });
      }
    };
    return (
      <div className="FormAddTask">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" style={{ marginLeft: '15px' }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
  
  export default FormAddStudent;