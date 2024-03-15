import React, { useEffect } from 'react';
// import './App.css';
import Navbar from '../pages/Navbar/Navbar';
import StudentMain from '../pages/Stunents/StudentsPage';
import { Route, Routes } from 'react-router-dom';
import UpdatePage from '../pages/Update/UpdatePage';
import AuthorizationPage from '../pages/Auth/AuthPage';
import { useAppDispatch } from '../redux/store';
import { User } from '../pages/Auth/reducer/type';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

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
        <Route path="/" element={<AuthorizationPage />} />
        <Route path="/update" element={<UpdatePage />} />
        <Route path="/main" element={<StudentMain />} />
      </Routes>
    </div>
  );
}

export default App;
