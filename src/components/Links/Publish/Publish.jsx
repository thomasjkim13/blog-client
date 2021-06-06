import "./publish.css"

export default function Publish() {
  return (
    <div className="publish">
      <img className="publishImg"
        src="https://www.chf.or.kr/jnrepo/namo/img/images/000005/20210119182559666_QHTTNT8F.jpg"
        alt=""
      />
      <form className="publishForm">
        <div className="publishFormGroup">
          {/* links to id="fileInput" */}
          <label htmlFor="fileInput">
            <i className="publishIcon fas fa-folder-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}} />
          {/* autoFocus automatically focuses on the text input */}
          <input type="text" placeholder="Title" className="publishInput" autoFocus={true} />
        </div>
        <div className="publishFormGroup">
          <textarea placeholder="Tell your story..." type="text" className="publishInput publishText"></textarea>
        </div>
        <button className="publishBtn">Publish</button>
      </form>
    </div>
  )
}
