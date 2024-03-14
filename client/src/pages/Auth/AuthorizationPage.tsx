import React, { useState } from 'react';

function AuthorizationPage(): JSX.Element {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

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
