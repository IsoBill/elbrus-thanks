import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { User } from './reducer/type';

function AuthorizationPage(): JSX.Element {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const onhandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data: { message: string; user: User } = await (
      await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify({ login, password }),
      })
    ).json();
    if (data.message === 'success') {
      dispatch({ type: 'auth' });
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="login"
          placeholder="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default AuthorizationPage;
