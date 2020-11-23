import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://crown-db-16670.firebaseio.com/'
});

export default instance;