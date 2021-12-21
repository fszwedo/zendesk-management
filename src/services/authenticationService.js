import axios from 'axios';

const makeZendeskRequest = async (path, method, payload) => {

    const options = {
        headers: {
            authorization: 'Basic ' + Buffer.from(`${process.env.EMAIL}/token:${process.env.APIKEY}`).toString('base64')
        }
    }

    const finalPath = process.env.URL + path;    
    let res;

    if(method === 'GET') res = await axios.get(finalPath, options);
    if(method === 'POST') res = await axios.post(finalPath, payload, options);
    if(method === 'PUT') res = await axios.put(finalPath, payload, options);

    return res.data;
}


export default makeZendeskRequest;