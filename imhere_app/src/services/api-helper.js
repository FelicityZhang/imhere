const url = 'http://localhost:1234'


export const seekerRegister = (registerData) => {
    const opts = {
      method: 'POST',
      body: JSON.stringify(registerData),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch(`${url}/seeker/registration`, opts)
    .then(resp => resp.json())
}

export const giverRegister = (registerData) => {
    const opts = {
      method: 'POST',
      body: JSON.stringify(registerData),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch(`${url}/giver/registration`, opts)
    .then(resp => resp.json())
}

export const seekerLogin = (loginData) => {
    const opts = {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    return fetch(`${url}/seeker/signin`, opts)
      .then(resp => resp.json())
  }

  export const giverLogin = async (loginData) => {
    const opts = {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const fetchData = await fetch(`${url}/giver/signin`, opts)
      .then(resp => {
        return resp.json();
      })
      .catch(e=>{
        return ''
      })
    return fetchData;
  }