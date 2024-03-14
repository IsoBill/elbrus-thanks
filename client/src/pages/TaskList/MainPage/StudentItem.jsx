import React from 'react';
import './StudentItem.scss';

type StudentItemProps = {
}

export function StudentItem({}: StudentItemProps): JSX.Element {
  return (
    <div className='StudentItem'>
        <div>Name</div>
        <div>Phase</div>
        <div>Thanks</div>
    </div>
  );
}

export default StudentItem;
