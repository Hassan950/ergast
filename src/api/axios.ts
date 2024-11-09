import axios from 'axios';

export default axios.create({
  baseURL: 'https://ergast.com/api/f1',
  headers: {
    'Content-Type': 'application/json',
  },
});
