import React, { useState } from 'react';
import type { Student, StudentId } from '../../app/type/Student';
import FormUpdate from './FormUpdate';
import ModalWindow from '../../ui/modal/ModalPage';
import { useAppDispatch } from '../../redux/store';
import './UpdateStudent.scss';

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
      <div className="UpdateStudent">
        <p>{student.name}</p>
        <div className="buttons">
          <button
            type="button"
            onClick={() => onClose((prev) => !prev)}
            style={{
              backgroundImage: 'url(free-icon-pencil-4277132.png)',
            }}
          ></button>

          <button
            type="button"
            onClick={() => onHadleDelete(student.id)}
            style={{
              backgroundImage: 'url(free-icon-recycle-bin-3156999.png)',
            }}
          ></button>
        </div>
      </div>
      <ModalWindow isOpen={isOpen} onClose={onClose}>
        <div className="ModalContent">
          <FormUpdate student={student} onClose={onClose} />
        </div>
      </ModalWindow>
    </>
  );
}

export default UpdateStudent;
