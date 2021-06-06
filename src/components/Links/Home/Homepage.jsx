import "./homepage.css"
import Header from "../../Header/Header"
import Posts from "../../Posts/Posts"
import Sidebar from "../../Sidebar/Sidebar"

export default function Homepage() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}
