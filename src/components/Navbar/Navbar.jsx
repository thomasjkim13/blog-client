import { Link } from "react-router-dom"
import "./navbar.css";

export default function Navbar() {
  const user = false;
  return (
    <div className="nav">
      <div className="nav-left">
        <i className="navIcon fab fa-facebook"></i>
        <i className="navIcon fab fa-twitter"></i>
        <i className="navIcon fab fa-linkedin"></i>
        <i className="navIcon fab fa-instagram"></i>
      </div>
      <div className="nav-center">
        <ul className="nav-link">
          <li className="navLink"><Link to="/" className="link">HOME</Link></li>
          <li className="navLink"><Link to="/publish" className="link">PUBLISH</Link></li>
          <li className="navLink">
            {/* if there is user, show LOGOUT */}
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="nav-right">
        {/* if there is user, allow user to user profile picture */}
        {user? (
          <img className="profileImage" 
          src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f709d82fa4f131fa2114a74%2F0x0.jpg" alt="person and airplane"/>
        ) : (
          // if not, direct to these links
          <ul className="nav-link">
            <li className="navLink">
              <Link className="link" to="/signin">SignIn</Link>
            </li>
            <li className="navLink">
              <Link className="link" to="/signup">SignUp</Link>
            </li>
          </ul>
        )
      }
      </div>
    </div>
  )
}
