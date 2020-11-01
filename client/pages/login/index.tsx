import React, {useState} from 'react';
import useStores from 'utils/useStore';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {userStore} = useStores()
  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    userStore.login({email,password})
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Login</p>
      <label htmlFor="email">
        email:
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
        />
      </label>
      <br />

      <label htmlFor="password">
        password:
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Login;