import { Link } from "react-router-dom"
import { useContext, useRef } from "react"
import { Context } from "../../context/Context"
import axios from "axios"
import "./signin.css"

export default function SignIn() {
  const userRef = useRef()
  const passwordRef = useRef()
  const { user, dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type:"SIGNIN_START" })
    try {
      const res = await axios.post("/auth/signin", {
        username: userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({ type:"SIGNIN_SUCCESS", payload: res.data })
    } catch (err) {
      dispatch({ type:"SIGNIN_FAILURE" })
    }
  }

  console.log(user)
  return (
    <div className="signin">
      <span className="signinTitle">SignIn</span>
      <form className="signinForm" onSubmit={ handleSubmit }>
        <label>Username</label>
        <input type="text" className="signinInput" placeholder="Enter your username..." ref={userRef}/>
        <label>Password</label>
        <input type="password" className="signinInput" placeholder="Enter your password..." ref={passwordRef} />
        <button className="signinBtn" type="submit" disabled={isFetching}>SignIn</button>
      </form>
      <button className="signupRegisterBtn">
        <Link className="link" to="/signup">SignUp</Link>
      </button>
    </div>
  )
}
