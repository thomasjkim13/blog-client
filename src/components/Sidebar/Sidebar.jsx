import "./sidebar.css"

export default function Sidebar() {
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
          <li className="barListItem">Country</li>
          <li className="barListItem">Language</li>
          <li className="barListItem">Culture</li>
          <li className="barListItem">Music</li>
          <li className="barListItem">Food</li>
          <li className="barListItem">Sport</li>
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
