import React, { useMemo, useReducer } from 'react';
import TasksList from '../pages/TaskList/TasksList';
import './App.css';

function App(): JSX.Element {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const stateContext = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <div className="App">
      <h2>Список задач</h2>
      <TasksList />
    </div>
  );
}

export default App;
