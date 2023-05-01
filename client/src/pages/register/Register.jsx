import { useState } from 'react'
import './Register.scss'


const Register = () => {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

async function register(e){
  e.preventDefault()
   await fetch('http://localhost:3300/register', {
    method: 'POST',
    body: JSON.stringify({
      username, 
      password
    }),
    headers:{'Content-Type': 'application/json'}
  })
  
}

  return (
    <div className="login-container">
      <div className='login-card'>
        <h2>Create Your Scoop Account</h2>  
        <form action="" className='login-form' onSubmit={register}>
          <input className='email' type="email" name='email' 
            value={username}  
            onChange={e => setUsername(e.target.value)}  
            placeholder='Enter your email'/>
          <input className='pwd' type="password" name='password' 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            placeholder='*******'/>
          <button className='btn-primary'>Register</button>
        </form> 
      </div>
    </div>
  )
}

export default Register