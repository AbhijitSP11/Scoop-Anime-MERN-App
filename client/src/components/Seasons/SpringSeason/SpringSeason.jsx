import { useEffect, useState } from 'react'
import Card from '../../card/Card'
import './SpringSeason.scss'


const SpringSeason = () => {

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3300/post')
    .then(response => response.json())
    .then(posts=> setPosts(posts))
  }, [])


  return (
    <div className='container'>
        <h1>Spring Season</h1>
        <div className='card-grid'>
        {
          posts.length > 0 && posts.map(post =>(
            <Card key={post._id} {...post}/>
          ))
        }
           
        </div>
    </div>
  )
}

export default SpringSeason