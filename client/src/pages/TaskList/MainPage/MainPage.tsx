import React from 'react';
import './MainPage.scss';
import StudentMain from './StudentMain';

type MainPageProps = {};

export function MainPage({}: MainPageProps): JSX.Element {
  return (
    <div className="MainPage">
      <StudentMain />
    </div>
  );
}

export default MainPage;
