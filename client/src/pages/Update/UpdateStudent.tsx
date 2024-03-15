import React, { useState } from 'react';
import type { Student, StudentId } from '../../app/type/Student';
import FormUpdate from './FormUpdate';
import ModalWindow from '../../ui/modal/ModalPage';
import { useAppDispatch } from '../../redux/store';

type UpdateStudentProps = {
  student: Student;
};

export function UpdateStudent({ student }: UpdateStudentProps): JSX.Element {
  const [isOpen, onClose] = useState(false);
  const dispatch = useAppDispatch();

  const onHadleDelete = async (id: number): Promise<void> => {
    const data: { message: string } = await (
      await fetch(`/api/student/${id}`, {
        method: 'DELETE',
      })
    ).json();
    if (data.message === 'success') {
      dispatch({ type: 'students/remove', payload: id });
    }
  };

  return (
    <>
      <ModalWindow isOpen={isOpen} onClose={onClose}>
        <FormUpdate student={student} onClose={onClose} />
      </ModalWindow>
      <div className="UpdateStudent">{student.name}</div>
      <button type="button" onClick={() => onClose((prev) => !prev)}>
        Изменить
      </button>
   <button type="button" onClick={() => onHadleDelete(student.id)}>
          Удалить
    </button>
    </>
)
}

export default UpdateStudent;
