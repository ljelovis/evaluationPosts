import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUsersList } from "../../store/selector/usersSelector";
import "./style.css";

function PostHome({ post }) {
  const users = useSelector(selectUsersList);

  function getName(userId) {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Auteur inconnu";
  }

  return (
    <div className={"post-card"}>
      <h2>{post.title}</h2>
      <h3 className={"auteur"}>de {getName(post.userId)}</h3>
      <p>{post.body}</p>
      <Link className={"see-more"} to={`/posts/${post.id}`}>
        Voir la suite...
      </Link>
    </div>
  );
}

export default PostHome;
