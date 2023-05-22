/* eslint-disable react/prop-types */
import { formatISO9075 } from 'date-fns'
import './Card.scss'
import { Link } from 'react-router-dom'

const Card = ({ _id, summary, title, createdAt, cover,author}) => {
  return (
    <div className="container-card">
        <div>
        <Link to={`/post/${_id}`}>
        <img className="img" src={'	http://localhost:3300/' + cover} alt="image" />
        </Link>
    
        </div>
        <div className="text">
            <p className="genre">Fantasy</p>
            <Link to={`/post/${_id}`}>
            <h3 className="title">{title}</h3>
            </Link>
            <p className="description">{summary}</p>
        </div>
        <div className="small__text">
            <span className="author">{author?.username}</span>
            <span className="date">
              {/* <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time> */}
              <time>{formatISO9075(new Date(createdAt))}</time>

            </span>
        </div>
    </div>
  )
}

export default Card