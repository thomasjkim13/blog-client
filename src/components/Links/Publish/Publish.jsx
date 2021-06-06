import "./publish.css"

export default function Publish() {
  return (
    <div className="publish">
      <form className="publishForm">
        <div className="publishFormGroup">
          {/* links to id="fileInput" */}
          <label htmlFor="fileInput">
            <i className="publishIcon fas fa-folder-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}} />
          {/* autoFocus automatically focuses on the text input */}
          <input type="text" placeholder="title" className="publishInput" autoFocus={true} />
        </div>
        <div className="publishFormGroup">
          <textarea placeholder="Tell your story..." type="text" className="publishStory"></textarea>
        </div>
        <button className="publishBtn">Publish</button>
      </form>
    </div>
  )
}
