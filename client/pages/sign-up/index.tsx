import React, {useState} from 'react';
import useStores from 'utils/useStore';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  // TODO: sẽ làm xác nhận sau // const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const {userStore} = useStores()
  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    userStore.signUp({email,password})
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Sign Up</p>
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

      <label htmlFor="name">
        name: 
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="input"
        />
      </label>
      <br />

      <label htmlFor="password">
        address
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          name="address"
          type="input"
        />
      </label>
      <br />

      <label htmlFor="password">
        phone
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          name="phoneNumber"
          type="input"
        />
      </label>
      <br />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default SignUp;