import "./signup.css"

export default function SignUp() {
  return (
    <div className="signup">
      <span className="signupTitle">SignUp</span>
      <form className="signupForm">
        <label>Username</label>
        <input type="text" className="signupInput" placeholder="Enter your username..." />
        <label>Email</label>
        <input type="text" className="signupInput" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" className="signupInput" placeholder="Enter your password..." />
        <button className="signupBtn">SignUp</button>
      </form>
      <button className="signupRegisterBtn">SignIn</button>
    </div>
  )
}
