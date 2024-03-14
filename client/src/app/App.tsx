import React, { useMemo, useReducer } from 'react';
// import TasksList from '../pages/TaskList/TasksList';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../pages/TaskList/NavBar/NavBar';
import MainPage from '../pages/TaskList/MainPage/MainPage';

function App(): JSX.Element {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const stateContext = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <div className="App">
      <NavBar />
      {/* <TasksList /> */}
      <MainPage/>
    </div>
  );
}

export default App;
