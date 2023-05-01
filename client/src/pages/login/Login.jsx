import './Login.scss'

const Login = () => {
  return (
    <div className="login-container">
      <div className='login-card'>
        <h2>Login</h2>  
        <form action="" className='login-form'>
          <input className='email' type="email" name='email' placeholder='Enter your email'/>
          <input className='pwd' type="password" name='password' placeholder='*******'/>
          <button className='btn-primary'>Login</button>
        </form> 
      </div>
    </div>
  )
}

export default Login