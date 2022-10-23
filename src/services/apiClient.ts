import  { create } from 'apisauce';

const apiUrlTest  = 'http://localhost:8080';
const  apiUrlLive  =  '';

const api =  create({
    baseURL: apiUrlTest,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})


export default api;