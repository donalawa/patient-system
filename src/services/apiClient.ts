import  { create } from 'apisauce';

const apiUrlTest  = 'http://localhost:8080';
const  apiUrlLive  =  'https://patient-backend.vercel.app/';

const api =  create({
    baseURL: apiUrlLive,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})


export default api;
