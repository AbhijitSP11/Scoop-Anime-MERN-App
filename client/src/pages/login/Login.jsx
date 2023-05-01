import { useState } from 'react'
import {Navigate} from 'react-router-dom'
import './Login.scss'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState('')

  async function login(e){
    e.preventDefault();
   const response = await fetch('http://localhost:3300/login', {
      method: 'POST', 
      body: JSON.stringify({username, password}),
      headers: {'content-type': 'application/json'},
      credentials:'include', 
    })
    if(response.ok){
      setRedirect(true)
      alert('Successfully logged in')
    }
    else{
      alert('Wrong Credentials' )
    }
  }

  if(redirect){
    return <Navigate to={'/'}/>
  }

  return (
    <div className="login-container">
      <div className='login-card'>
        <h2>Login</h2>  
        <form action="" className='login-form' onSubmit={login}>
          <input className='email' type="email" name='email' placeholder='Enter your email'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input className='pwd' type="password" name='password' placeholder='*******'
            value={password}
            onChange={e=> setPassword(e.target.value)}
          />
          <button className='btn-primary'>Login</button>
        </form> 
      </div>
    </div>
  )
}

export default Login