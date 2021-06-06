import "./post.css"

export default function Post() {
  return (
    <div className="post" >
      <img 
      className="postImg" src="https://www.chf.or.kr/jnrepo/namo/img/images/000005/20210119182559666_QHTTNT8F.jpg" alt="Korean traditional food" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Country</span>
          <span className="postCategory">Food</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quasi earum! Iure labore nobis eos aliquid maiores quidem quasi corporis debitis omnis. Libero consequuntur aspernatur quae quaerat praesentium, ratione iusto.</p>
    </div>
  )
}
