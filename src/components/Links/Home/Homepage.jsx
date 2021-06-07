import { useEffect, useState } from "react"
import "./homepage.css"
import Header from "../../Header/Header"
import Posts from "../../Posts/Posts"
import Sidebar from "../../Sidebar/Sidebar"
import axios from "axios"

export default function Homepage() {
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts")
      setPosts(res.data)
    }
    fetchPosts()
  }, [])

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  )
}
