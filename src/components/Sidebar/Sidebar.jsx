import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./sidebar.css"


export default function Sidebar() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats()
  }, [])

  return (
    <div className="sidebar">
      <div className="barLink">
        <span className="barItem">ABOUT ME</span>
        <img className="meImg" 
        src="https://www.smartertravel.com/wp-content/uploads/2016/08/travel-tourist-photographer-lens-camera-sunset.jpg" alt="man with camera" />
        <p>lorem ipsum dolor sit amet, consectetur</p>
      </div>
      <div className="barLink">
        <span className="barItem">CATEGORIES</span>
        <ul className="barList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="barListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="barLink">
        <span className="barItem">FOLLOW US</span>
        <div className="barSocialMedia">
          <i className="barIcon fab fa-facebook"></i>
          <i className="barIcon fab fa-twitter"></i>
          <i className="barIcon fab fa-linkedin"></i>
          <i className="barIcon fab fa-instagram"></i>
        </div>
      </div>

    </div>
  )
}
