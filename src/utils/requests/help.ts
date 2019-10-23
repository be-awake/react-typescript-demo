import axios from 'axios';

async function getData() {
    let result = await axios.get('/string');
    return result.data;
}
export default { getData };