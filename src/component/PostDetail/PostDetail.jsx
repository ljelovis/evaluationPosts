import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchComments } from "../../store/reducer/commentsSlice";
import { fetchUsers } from "../../store/reducer/usersSlice";
import { selectCommentsList } from "../../store/selector/commentsSelector";
import { selectPostsList } from "../../store/selector/postsSelector";
import { selectUsersList } from "../../store/selector/usersSelector";
import NewComment from "../NewComment/NewComment";
import "./style.css";

function PostDetail() {
  const { id } = useParams();
  const posts = useSelector(selectPostsList);
  const post = posts.find((post) => post.id === parseInt(id));
  let comments = useSelector(selectCommentsList);
  const dispatch = useDispatch();
  const users = useSelector(selectUsersList);

  function getName(userId) {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Auteur inconnu";
  }

  useEffect(() => {
    dispatch(fetchComments(id));
    dispatch(fetchUsers());
  }, []);

  if (!post) {
    return <p>Impossible de charger le post</p>;
  }

  return (
    <div className={"post"}>
      <div className={"post-detail"}>
        <h1>{post.title}</h1>
        <h2 className={"auteur"}>par {getName(post.userId)}</h2>
        <p className={"post-body"}>{post.body}</p>
      </div>
      <div className={"comments"}>
        <h3>Commentaires</h3>
        {comments.map((comment) => (
          <div className={"comment"} key={comment.id}>
            <p className={"comment-auteur"}>
              Commentaire de{" "}
              <span className={"capitalize"}>{comment.name}</span>
            </p>
            <p className={"capitalize"}>{comment.body}</p>
          </div>
        ))}
        <NewComment postId={id} />
      </div>
    </div>
  );
}

export default PostDetail;
