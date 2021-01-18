import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://react-burget-34c35-default-rtdb.firebaseio.com/',
});

export default instance;
