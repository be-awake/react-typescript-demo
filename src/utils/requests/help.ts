import axios from 'axios';

async function getData() {
    let result = await axios.get('/string');
    return result.data;
}

async function postData() {
    let result = await axios.post('/postData');
    return result.data;
}

export default { getData, postData };