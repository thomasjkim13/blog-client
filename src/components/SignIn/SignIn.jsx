import "./signin.css"

export default function SignIn() {
  return (
    <div className="signin">
      <span className="signinTitle">SignIn</span>
      <form className="signinForm">
        <label>Email</label>
        <input type="text" className="signinInput" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" className="signinInput" placeholder="Enter your password..." />
        <button className="signinBtn">SignIn</button>
      </form>
      <button className="signupRegisterBtn">Register</button>
    </div>
  )
}
