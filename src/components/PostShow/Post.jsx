import "./post.css"

export default function Post() {
  return (
    <div >
      <img 
      className="postImg" src="https://www.chf.or.kr/jnrepo/namo/img/images/000005/20210119182559666_QHTTNT8F.jpg" alt="Korean traditional food" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Country</span>
          <span className="postCategory">Food</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet, consectetur
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
    </div>
  )
}
