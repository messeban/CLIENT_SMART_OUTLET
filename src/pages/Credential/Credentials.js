import React, { useState } from "react";
import customAxios from '../../util/axios';
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
        <div className="container">
        <form onSubmit={handleSubmit}>
            <label>
                Email:</label>
        <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            <label>
                User Name:</label>
        <input
                    type="text"
                    value={username}
                    onChange={e => setUserame(e.target.value)}
                />
            <label>
                Password:</label>
        <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            <input type="submit" value="Submit" />
        </form>
        </div>
    );
}
export default Credentials;
