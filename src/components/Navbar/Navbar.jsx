import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../../context/Context"
import "./navbar.css";

export default function Navbar() {
  const { user, dispatch } = useContext(Context)
  const Folder = "http://localhost:5000/images/"

  const handleSignOut = () => {
    dispatch ({ type: "SIGNOUT"})
  }
  return (
    <div className="nav">
      <div className="nav-left">
        <i className="navIcon fab fa-facebook"></i>
        {/* <i className="navIcon fab fa-twitter"></i> */}
        <i className="navIcon fab fa-linkedin"></i>
        <i className="navIcon fab fa-instagram"></i>
      </div>
      <div className="nav-center">
        <ul className="nav-link">
          <li className="navLink"><Link to="/" className="link">HOME</Link></li>
          <li className="navLink"><Link to="/publish" className="link">PUBLISH</Link></li>
          <li className="navLink" onClick={ handleSignOut }>
            {/* if there is user, show LOGOUT */}
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="nav-right">
        {/* if there is user, allow user to user profile picture */}
        {user? (
          <Link to="/accountsettings">
            <img className="profileImage" src={ Folder + user.profilePic } alt=""/>
          </Link>
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
