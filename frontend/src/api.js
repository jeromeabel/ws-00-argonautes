import axios from 'axios';

export default axios.create({
  baseURL: `https://argonautes.onrender.com/api`
  //baseURL: `http://localhost:3000/api`
});