
// import fetch from "isomorphic-fetch";
// import {API} from '../config'
// import $ from 'jquery-ajax';

// const SendAjaxRequest = async (obj) => {
//     return new Promise( function(resolve, reject) {
//         $.ajax({
//             ...obj,
//             success: function(data){ resolve(data); },
//             // failure: function(err) { reject(err); }
//             error: function(err) { reject(err); }
//         })
//     } )
// }

// export const signup=(user)=>{
//     return SendAjaxRequest({
//         url: `${API}/signup`,
//         type: "POST",
//         crossDomain: true,
//         dataType: 'json',
//         data: JSON.stringify(user),
//         allow:"application/json",
//         contentType:"application/json",
//         // headers:{"Access-Control-Allow-Origin":"*"}    
//     }) 
// }


import fetch from "isomorphic-fetch";
import cookie from 'js-cookie'
import {API} from '../config'


//signup fetch
export const signup=(user)=>{
    return fetch((`${API}/signup`),{
    // return fetch("http://localhost:8000/api/signup",{
      
        method:'POST',
        headers:{
            //    'Access-Control-Allow-Origin': '*',
            //    "Access-Control-Request-Method": "*",
            mode:'cors',
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

//signin fetch
export const signin=(user)=>{
    return fetch((`${API}/signin`),{
        
        method:'POST',
        headers:{
            mode:'cors',
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

//signout method
export const signout=(next)=>{
    removeCookie('token')
    removeLocalStorage('user')
    next()

    return fetch(`${API}/signout`,{

        method:'GET'
    })
    .then(response=>{
        console.log('sginout success');
    })
    .catch(err=>console.log(err));
}



//set cookie
export const setCookie=(key,value)=>{
    if(process.browser){
        cookie.set(key,value,{expires:1});
    }
}
export const removeCookie=(key)=>{
    if(process.browser){
        cookie.remove(key,{expires:1});
    }
}

//get cookie
export const getCookie=(key)=>{
    if(process.browser){
       return cookie.get(key);
    }
}

//local storage
export const setLocalStorage=(key,value)=>{
    if (process.browser){
        localStorage.setItem(key,JSON.stringify(value))  
    }
}
export const removeLocalStorage=(key)=>{
    if (process.browser){
        localStorage.removeItem(key)  
    }
}

//authenticate user by passing data to cookie and local storage
export const authenticate=(data,next)=>{
    setCookie('token',data.token);
    setLocalStorage('user',data.user);
    next();
}

//get authenticated user info from local storage
export const isAuth=()=>{
    if(process.browser){
        const cookieChecked=getCookie('token')
        if(cookieChecked){
            if(localStorage.getItem('user')){
                 return JSON.parse(localStorage.getItem('user'))
            }else{
                return false;
            }
        }
    }
}

