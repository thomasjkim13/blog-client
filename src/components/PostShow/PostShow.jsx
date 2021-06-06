import "./postshow.css"

export default function PostShow() {
  return (
    <div className="postShow">
      <div className="postShowWrapper">
        <img className="postShowImg" 
        src="https://www.chf.or.kr/jnrepo/namo/img/images/000005/20210119182559666_QHTTNT8F.jpg" alt="" />
        <h1 className="postShowTitle">
          Lorem ipsum dolor sit amet
          <div className="postShowEdit">
            <i className="postShowIcon far fa-edit"></i>
            <i className="postShowIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="postShowInfo">
          <span className="postShowAuthor">Author: <b>Kim</b></span>
          <span className="postShowDate">1 hour ago</span>
        </div>
        <p className="postShowDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati doloribus inventore autem excepturi exercitationem quod alias dolorum voluptatum, dignissimos facere officia quisquam et. Placeat dolor impedit atque unde recusandae ipsum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati doloribus inventore autem excepturi exercitationem quod alias dolorum voluptatum, dignissimos facere officia quisquam et. Placeat dolor impedit atque unde recusandae ipsum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati doloribus inventore autem excepturi exercitationem quod alias dolorum voluptatum, dignissimos facere officia quisquam et. Placeat dolor impedit atque unde recusandae ipsum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati doloribus inventore autem excepturi exercitationem quod alias dolorum voluptatum, dignissimos facere officia quisquam et. Placeat dolor impedit atque unde recusandae ipsum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati doloribus inventore autem excepturi exercitationem quod alias dolorum voluptatum, dignissimos facere officia quisquam et. Placeat dolor impedit atque unde recusandae ipsum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati doloribus inventore autem excepturi exercitationem quod alias dolorum voluptatum, dignissimos facere officia quisquam et. Placeat dolor impedit atque unde recusandae ipsum?
        </p>
      </div>
    </div>
  )
}
