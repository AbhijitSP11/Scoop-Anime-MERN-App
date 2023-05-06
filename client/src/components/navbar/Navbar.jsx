import { Link } from 'react-router-dom'
import './Navbar.scss'
import { useContext, useEffect} from 'react'
import { UserContext } from '../../context/UserContext'

const Navbar = () => {
  // const [username, setUsername] = useState(null)
  const {userInfo, setUserInfo} = useContext(UserContext)
  useEffect(()=>{
    fetch('http://localhost:3300/profile', {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(userInfo =>
      //  setUsername(userInfo.username)
      setUserInfo(userInfo)
       )
  }, [])

  const username = userInfo?.username;

  function logout(){
    fetch('http://localhost:3300/logout', {
      credentials: 'include', 
      method: 'POST'
    })
    // setUsername(null)
  }

  return (
    <header>
        <div className="logo">
            <span><Link to='/'>ScoopAnime</Link></span>
            <span className='dot'>.</span>
        </div>
        <nav>
        {username && 
        <>
          <Link to='/create'>Create new post</Link>
          <a onClick={logout} >Logout</a>
        </>
        }
        {!username && (
          <>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
          </>
        )}
         
        </nav>
    </header>
  )
}

export default Navbar