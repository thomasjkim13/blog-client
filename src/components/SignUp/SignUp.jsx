import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import "./signup.css"

export default function SignUp() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post("/auth/register", {
      username, 
      email, 
      password
    })
    console.log(res)
  }
  return (
    <div className="signup">
      <span className="signupTitle">SignUp</span>
      <form className="signupForm" onSubmit={ handleSubmit }>
        <label>Username</label>
        <input 
          type="text" 
          className="signupInput" 
          placeholder="Enter your username..." 
          onChange={e => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input 
          type="text" 
          className="signupInput" 
          placeholder="Enter your email..." 
          onChange={e => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input 
          type="password" 
          className="signupInput" 
          placeholder="Enter your password..." 
          onChange={e => setPassword(e.target.value)}
        />
        <button className="signupBtn" type="submit">SignUp</button>
      </form>
      <button className="signupRegisterBtn">
        <Link className="link" to="/signin">SignIn</Link>
      </button>
    </div>
  )
}
