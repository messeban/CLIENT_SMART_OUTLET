import axios from 'axios';
// Request interceptor for API calls

const customAxios = axios.create({
  baseURL: `http://localhost:5000`,
  timeout: 1000, 
  headers: { 'Content-Type': 'application/json'  }
});

async function refreshAccessToken(){
  let temp; 
  await customAxios.post("/users/token", {token: localStorage.getItem('refreshToken')})
  .then((response)=>{
    console.log(response.data.accessToken);
    temp = response.data.accessToken;
  })
  .catch(function (error) {
    console.log(error);
  });
  console.log(temp);
  return temp;

}


customAxios.interceptors.request.use(
  async config => {
    const accessToken = localStorage.getItem('accessToken')
    config.headers = { 
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    return config;
  },
  error => {
    Promise.reject(error)
});

// Response interceptor for API calls
customAxios.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 403 && !originalRequest._retry) {
    originalRequest._retry = true;
    const access_token = await refreshAccessToken();
    localStorage.setItem("accessToken", access_token);     
    console.log("AT: " +access_token);     
    axios.defaults.headers.common['authorization'] = 'Bearer ' + access_token;
    axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded ';

    return customAxios(originalRequest);
  }
  return Promise.reject(error);
});

export default customAxios;
