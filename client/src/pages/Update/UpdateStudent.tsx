import React, { useState } from 'react';
import type { Student } from '../../app/type/Student';
import FormUpdate from './FormUpdate';
import ModalWindow from '../../ui/modal/ModalPage';

type UpdateStudentProps = {
  student: Student;
};

export function UpdateStudent({ student }: UpdateStudentProps): JSX.Element {
  const [isOpen, onClose] = useState(false);
  return (
    <>
      <ModalWindow isOpen={isOpen} onClose={onClose}>
        <FormUpdate student={student} onClose={onClose} />
      </ModalWindow>
      <div className="UpdateStudent">{student.name}</div>
      <button type="button" onClick={() => onClose((prev) => !prev)}>
        Изменить
      </button>
    </>
  );
}

export default UpdateStudent;
