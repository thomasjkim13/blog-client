import { useEffect, useState } from "react"
import "./homepage.css"
import Header from "../../Header/Header"
import Posts from "../../Posts/Posts"
import Sidebar from "../../Sidebar/Sidebar"
import axios from "axios"
import { useLocation } from "react-router"

export default function Homepage() {
  const [ posts, setPosts ] = useState([])
  const { search } = useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])

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
