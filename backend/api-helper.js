const baseURL = 'http://localhost:1234'

export const LoignSeeker = (seekerLoginData) => {
    const opt ={
        method: 'POST',
        body: JSON.stringify(seekerLoginData),
        headers:{
            'Content-Type':'application/json'
        }
    }
    return fetch(`${baseURL}/seeker/signin`, opts)
        .then(resp => resp.json())
}

export const LoignGiver = (giverLoginData) => {
    const opt ={
        method: 'POST',
        body: JSON.stringify(giverLoginData),
        headers:{
            'Content-Type':'application/json'
        }
    }
    return fetch(`${baseURL}/giver/signin`, opts)
    .then(resp => resp.json())
}

export const seekerRegister =(seekerResgisterData) => {
const opts ={
    method:'POST',
    body: JSON.stringify(seekerResgisterData),
    headers:{
        'Content-Type': 'application/json'
    }
}
return fetch(`${baseURL}/seeker/registration`, opts)
    .then(resp => resp.json())
}

export const giverRegister =(giverRegisterData) => {
    const opts ={
        method:'POST',
        body: JSON.stringify(giverRegisterData),
        headers:{
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${baseURL}/giver/registration`, opts)
        .then(resp => resp.json())
}

export const request = (requestData) => {
    const opts ={
        method:'POST',
        body:JSON.stringify(requestData),
        headers:{
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${baseURL}/seeker/:giverid/request`, opts)
        .then(resp =>resp.json())
}

export const seekerStatus = (seekerStatusData) =>{
    const opts={
        method:'POST',
        body:JSON.stringify(seekerStatusData),
        headers:{
            'Content-Type':'application/json'
        }
    }
    return fetch(`${baseRUL}seeker/status`)
}

export const giverStatus = (giverStatusData) =>{
    const opts={
        method:'POST',
        body:JSON.stringify(giverStatusData),
        headers:{
            'Content-Type':'application/json'
        }
    }
    return fetch(`${baseRUL}/giver/status`)
}