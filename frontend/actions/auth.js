import fetch from "isomorphic-fetch";
import {API} from '../config'


export const signup=(user)=>{
    return fetch((`${API}/signup`),{
    // return fetch("http://localhost:8000/api/signup",{
        
        method:'POST',
        headers:{
            mode:'cors',
           'Access-Control-Allow-Origin': '*',
           "Access-Control-Request-Method": "*",
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=> console.log(err))


}
