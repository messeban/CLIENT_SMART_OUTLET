import React, { useState } from "react";
import customAxios from '../util/axios';
import { useHistory } from "react-router-dom";

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
    <div className="Login">
    <form onSubmit={handleSubmit}>
      <label>
        User Name:
        <input
          type="text"
          value={username}
          onChange={e => setUserame(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}
export default Login;
