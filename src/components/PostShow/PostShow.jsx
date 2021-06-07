import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"
import axios from "axios"
import "./postshow.css"
import { Context } from "../../context/Context"
import { useContext } from "react"

export default function PostShow() {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const [post, setPost] = useState({})
  const Folder = "http://localhost:5000/images/"
  const {user} = useContext(Context)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    // create getPost function, async
    const getPost = async () => {
      // axios get signle post
      const res = await axios.get("/posts/" + path)
      // setPost to use post in useState
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
    }
    getPost()
    // whenever path changes, fire useEffect
  }, [path])
  
  // delete function to delete owners post
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, { data: { username:user.username },})
      // when deleted, direct to this link
      window.location.replace("/")
    } catch (err) {}
  }
  
  // function to update post information
  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, { 
        // update these properties
        username:user.username, 
        title, 
        desc 
      })
      setUpdate(false)
    } catch (err) {}
  }

  return (
    <div className="postShow">
      <div className="postShowWrapper">
        {post.photo && (
          <img className="postShowImg" 
          // use image from the image folder stored locally to keep it default
          src={Folder + post.photo}
          alt="" />
        )}{
          update ? (
            <input 
            type="text" 
            value={title} 
            className="postShowTitleInput" 
            autoFocus 
            onChange={(e) => setTitle(e.target.value)}
            /> 
            ) : (
            <h1 className="postShowTitle">
              {title}
              {post.username === user.username && (
                <div className="postShowEdit">
                  <i className="postShowIcon far fa-edit" onClick={() => setUpdate(true)}></i>
                  <i className="postShowIcon far fa-trash-alt" onClick={handleDelete}></i>
                </div>
              )}
            </h1>
          )
        }
        <div className="postShowInfo">
          <span className="postShowAuthor">Author : 
          <Link to ={`/?user=${post.username}`} className="link">
            <b> {post.username}</b>
          </Link>
          </span>
          <span className="postShowDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        {update ? (
          <textarea className="postShowDescInput" value={desc} onChange={(e) => setDesc(e.target.value)} />
        ) : (
          <p className="postShowDesc">{desc}</p>
        )}
        {update && (
        <button className="postShowButton" onClick={handleUpdate}>Update</button>
        )}
      </div>
    </div>
  )
}
