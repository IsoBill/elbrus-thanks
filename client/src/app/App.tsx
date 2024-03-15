import React, { useEffect } from 'react';
import './App.css';
import Navbar from '../pages/Navbar/Navbar';
import StudentMain from '../pages/Stunents/StudentsPage';
import { Route, Routes } from 'react-router-dom';
import UpdatePage from '../pages/Update/UpdatePage';
import AuthorizationPage from '../pages/Auth/AuthorizationPage';
import { RootState, useAppDispatch } from '../redux/store';
import { User } from '../pages/Auth/reducer/type';
import { useSelector } from 'react-redux';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);

  const checkUser = async (): Promise<void> => {
    const data: { message: string; user: User } = await (await fetch('api/auth/check')).json();

    if (data.message === 'success') {
      dispatch({ type: 'auth/userCheck', payload: data.user });
    }
  };

  useEffect(() => {
    checkUser().catch(console.log);
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<StudentMain />} />
        <Route path="/update" element={<UpdatePage />} />
        <Route path="/auth" element={<AuthorizationPage />} />
      </Routes>
    </div>
  );
}

export default App;
