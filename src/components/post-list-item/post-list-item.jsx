import './post-list-item.css';
const PostListItem = ({ onDelete, onLike, onImportant, ...post }) => {
  const { label, important, like } = post;
  let classNames = "app-list-item d-flex justify-content-between";
  if (important) classNames += ' important';
  if (like) classNames += ' like'
  return (
    <div className={classNames}>
      <span className="app-list-item-label"
        onClick={onLike}>
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn-star btn-sm"
          onClick={onImportant}>
          <i className="fa fa-star"></i>
        </button>
        <button className="btn-trash btn-sm"
          onClick={onDelete}>
          <i className="fa fa-trash"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </div>
  )
}

export default PostListItem;