import { useState, useContext } from "react"
import "./publish.css"
import axios from "axios"
import { Context } from "../../../context/Context"

export default function Publish() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const {user} = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      username:user.username,
      title,
      desc
    }
    if(file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("name", filename)
      data.append("file", file)
      newPost.photo = filename;
      try {
        await axios.post("/upload", data) 
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost)
      window.location.replace("/post/" + res.data._id)
    } catch (err) {}
  }

  return (
    <div className="publish">
      {file && (
        <img className="publishImg"
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
      <form className="publishForm" onSubmit = {handleSubmit}>
        <div className="publishFormGroup">
          {/* links to id="fileInput" */}
          <label htmlFor="fileInput">
            <i className="publishIcon fas fa-folder-plus"></i>
          </label>
          <input 
            type="file" 
            id="fileInput" 
            style={{display:"none"}} 
            onChange={(e) => setFile(e.target.files[0])}
          />
          {/* autoFocus automatically focuses on the text input */}
          <input 
            type="text" 
            placeholder="Title" 
            className="publishInput" 
            autoFocus={true} 
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="publishFormGroup">
          <textarea 
            placeholder="Tell your story..." 
            type="text" 
            className="publishInput publishText" 
            onChange={(e) => setDesc(e.target.value)}>
          </textarea>
        </div>
        <button className="publishBtn" type="submit">Publish</button>
      </form>
    </div>
  )
}
