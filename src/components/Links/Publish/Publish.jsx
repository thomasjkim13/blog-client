import "./publish.css"

export default function Publish() {
  return (
    <div className="publish">
      <form className="publishForm">
        <div className="publishFormGroup">
          <label htmlFor="fileInput">
            <i class="far fa-plus-square"></i>
          </label>
          <input type="file" id="fileInput" />
          <input type="text" placeholder="title" />

        </div>
      </form>
    </div>
  )
}
