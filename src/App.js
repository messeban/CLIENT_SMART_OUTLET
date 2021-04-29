import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import Login from './components/login';
import SignUp from './components/signUp';

import axios from 'axios';

// Request interceptor for API calls
axios.interceptors.request.use(
  async config => {
    const accessToken = localStorage.getItem('accessToken')
    config.headers = { 
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return config;
  },
  error => {
    Promise.reject(error)
});

// Response interceptor for API calls
axios.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 403 && !originalRequest._retry) {
    originalRequest._retry = true;
    const access_token = await refreshAccessToken();            
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token.accessToken;
    return axios(originalRequest);
  }
  return Promise.reject(error);
});

async function refreshAccessToken(){
   axios({
    method: 'post',
    url: 'localhost:5000/users/token',
    data: {
      token: localStorage.getItem('refreshToken')
    }
  })
  .then((response)=>{
    return response.accessToken
  })

}

function App() {
  return (
    <div className="App">
    <Login></Login>
    <SignUp></SignUp> 
    </div>
    );
}

export default App;
