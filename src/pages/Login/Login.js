import React, { useState } from "react";
import customAxios from '../../util/axios';
import { useHistory } from "react-router-dom";
import './Login.css';
import {Button} from '../../components/Button/Button';

export function Login(props) {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleSubmit = async (evt) => {
      evt.preventDefault();
    const user = {"username": username, "password":password};
      
    const config = { headers: { 'Content-Type': 'application/json'  } }


      await customAxios.post("/users/login", user, config)
      .then(function (response) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        localStorage.setItem('LoggedIn', true);

        history.push('/outlets');
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
      }
  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
    <h1>Login</h1>
      <label for='username'>
        User Name:</label>

        <input type="text" name='username' value={username} onChange={e => setUserame(e.target.value)}/>
      <label for='password'>
        Password:</label>
        <input
          name='password'
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button type='submit' buttonStyle='btn--outline'>LOGIN</Button> 
   </form>
    </div>
  );
}
export default Login;
