import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <header>
        <div className="logo">
            <span><Link to='/'>ScoopAnime</Link></span>
            <span className='dot'>.</span>
        </div>
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </nav>
    </header>
  )
}

export default Navbar