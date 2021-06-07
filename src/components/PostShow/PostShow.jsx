import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"
import axios from "axios"
import "./postshow.css"

export default function PostShow() {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path)
      setPost(res.data)
    }
    getPost()
  }, [path])

  return (
    <div className="postShow">
      <div className="postShowWrapper">
        {post.photo && (
          <img className="postShowImg" 
          src={post.photo}
          alt="" />
        )}
        <h1 className="postShowTitle">
          {post.title}
          <div className="postShowEdit">
            <i className="postShowIcon far fa-edit"></i>
            <i className="postShowIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="postShowInfo">
          <span className="postShowAuthor">Author: 
          <Link to ={`/?user=${post.username}`} className="link">
            <b>{post.username}</b>
          </Link>
          </span>
          <span className="postShowDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postShowDesc">
          {post.desc}
        </p>
      </div>
    </div>
  )
}
