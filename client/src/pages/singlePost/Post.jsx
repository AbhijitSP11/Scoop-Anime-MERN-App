import { useEffect, useState } from "react"
import { useParams} from 'react-router-dom'
import {formatISO9075} from 'date-fns'

export default function Post(){
    const {id} = useParams()
    const [postInfo, setPostInfo ] = useState(null)
    useEffect(()=>{
        fetch(`http://localhost:3300/post/${id}`)
        .then(response => {response.json(postInfo => {
            setPostInfo(postInfo)
        })})
    }, [])
    if(!postInfo) return '';
    return(
        <div>
            <h1>{postInfo.title}</h1>
            <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            <div className="author">by {postInfo.author.username}</div>
            <img src={`http://localhost:3300/${postInfo.cover}`} alt="cover" />
            <div dangerouslySetInnerHTML={{__html: postInfo.content}} />
        </div>
    )
}