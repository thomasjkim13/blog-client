import "./navbar.css";

export default function Navbar() {
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
          <li className="navLink">HOME</li>
          <li className="navLink">ABOUT</li>
          <li className="navLink">CONTACT</li>
          <li className="navLink">WRITE</li>
          <li className="navLink">LOGOUT</li>
        </ul>
      </div>
      <div className="nav-right">
        <img className="profileImage" 
        src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f709d82fa4f131fa2114a74%2F0x0.jpg" alt="person and airplane"/>
        <i className="navSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
