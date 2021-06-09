import "./show.css"
import Sidebar from "../Sidebar/Sidebar"
import PostShow from "../PostShow/PostShow"

export default function Show() {
  return (
    <div className="show">
      <PostShow />
      <Sidebar />
    </div>
  )
}
