import Axios from 'axios';

export const api = Axios.create({
    baseURL: "http://localhost:8080"
    // headers:"Access-Control-Allow-Origin"
});


    
