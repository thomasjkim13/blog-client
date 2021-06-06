import "./accountsettings.css"
import Sidebar from "../../components/Sidebar/Sidebar"

export default function AccountSettings() {
  return (
    <div className="accountSettings">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingPP">
            <img
              src="https://www.chf.or.kr/jnrepo/namo/img/images/000005/20210119182559666_QHTTNT8F.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="ppIcon far fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display:"none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Kim" />
          <label>Email</label>
          <input type="Email" placeholder="kim@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsUpdateBtn">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
