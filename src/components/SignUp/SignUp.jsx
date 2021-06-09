import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import "./signup.css"

export default function SignUp() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    // The try statement lets you test a block of code for errors
    try {
      const res = await axios.post("/auth/signup", {
        username, 
        email, 
        password,
      });
      // once signedup, direct to signin page
     res.data && window.location.replace("/signin")
    // catch error if wrong info in the input field
    // The catch statement lets you handle the error
    } catch(err) {
      setError(true)
    }
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
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input 
          type="text" 
          className="signupInput" 
          placeholder="Enter your email..." 
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input 
          type="password" 
          className="signupInput" 
          placeholder="Enter your password..." 
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signupBtn" type="submit">SignUp</button>
      </form>
      <button className="signupRegisterBtn">
        <Link className="link" to="/signin">SignIn</Link>
      </button>
      {error && <span style={{marginTop:"10px"}}>Something went wrong</span>}
    </div>
  )
}
