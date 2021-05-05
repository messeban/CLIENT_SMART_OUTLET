import React, { useState } from "react";
import customAxios from '../util/axios';
import { useHistory } from "react-router-dom";

export function Credentials(props) {
    const [email, setEmail] = useState("");
    const [username, setUserame] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const id = localStorage.getItem("personalId")
        customAxios.post("/users/create/"+id, { email, username, password })
            .then(function (response) {
                localStorage.removeItem('personalId');
                history.push('/');
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
        <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </label>
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
    );
}
export default Credentials;
