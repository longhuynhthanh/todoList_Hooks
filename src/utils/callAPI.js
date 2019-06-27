import axios from 'axios'
import {URL} from '../consts/index';
const callAPI = async (method, endpoint, data) => {
    return await axios({
        method,
        url: `${URL}${endpoint}`,
        data
    }).catch(err => console.log(err));
}

export default callAPI;