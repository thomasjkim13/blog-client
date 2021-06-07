import "./accountsettings.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import { Context } from "../../context/Context"
import { useContext, useState } from "react"
import axios from "axios"

export default function AccountSettings() {
  const { user, dispatch } = useContext(Context)
  const [file, setFile] = useState(null)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(false)
  const Folder = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: "UPDATE_START" })
    const updatedUser = {
      userId:user._id,
      username,
      email,
      password
    }
    if(file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("name", filename)
      data.append("file", file)
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data) 
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser)
      setSuccess(true)
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data })
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" })
    }
  }

  return (
    <div className="accountSettings">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={ handleSubmit }>
          <label>Profile Picture</label>
          <div className="settingPP">
            <img
              src={file ? URL.createObjectURL(file) : Folder + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="ppIcon far fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display:"none" }} onChange={(e) => setFile(e.target.files[0])}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)}/>
          <label>Email</label>
          <input type="Email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)}/>
          <label>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
          <button className="settingsUpdateBtn" type="submit">Update</button>
          {success && <span sthyle={{ color : "green", textAlign: "center", marginTop: "20px"}}>Profile has been updated!</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
