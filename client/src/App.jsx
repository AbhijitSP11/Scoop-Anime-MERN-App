import './App.scss'
import Layout from './components/Layout'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { UserContextProvider } from './context/UserContext'
import CreatePost from './pages/createPost/CreatePost'
import Post from './pages/singlePost/Post'

function App() {

  return (
    <>
   <UserContextProvider>
    <Routes>
      <Route path='/' element={ <Layout/> }>
        <Route index element={<Home/>} />
        <Route path={'/login'} element={ <Login/>}/>
        <Route path={'/register'} element={ <Register/>}/>
        <Route path={'/create'} element={ <CreatePost/>}/>
        <Route path={'/post/:id'} element={ <Post/>}/>
      </Route>
    </Routes>
  </UserContextProvider>
     
    </>
  )
}

export default App
