/* eslint-disable react/prop-types */
import { formatISO9075 } from 'date-fns'
import './Card.scss'

const Card = ({ summary, title, createdAt, cover,author}) => {
  return (
    <div className="container-card">
        <img className="img" src={'	http://localhost:5173/uploads' + cover} alt="image" />
        <div className="text">
            <p className="genre">Fantasy</p>
            <h3 className="title">{title}</h3>
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