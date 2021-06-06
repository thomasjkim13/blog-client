import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="barLink">
        <span className="barItem1">ABOUT ME</span>
        <img src="" alt="" />
        <p>lorem ipsum dolor sit amet, consectetur</p>
      </div>
      <div className="barLink">
        <span className="barItem2">ABOUT ME</span>
        <ul className="barList">
          <li className="barListItem">Country</li>
          <li className="barListItem">Language</li>
          <li className="barListItem">Culture</li>
          <li className="barListItem">Music</li>
          <li className="barListItem">Food</li>
          <li className="barListItem">Sport</li>
        </ul>
      </div>
    </div>
  )
}
