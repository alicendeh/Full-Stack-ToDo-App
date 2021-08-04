import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['todo-token'] = token;
  } else {
    delete axios.defaults.headers.common['todo-token'];
  }
};

export default setAuthToken;
