import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../store/reducer/postsSlice";
import { fetchUsers } from "../../store/reducer/usersSlice";
import { selectPostsList } from "../../store/selector/postsSelector";
import PostHome from "../PostHome/PostHome";
import "./style.css";

function List() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPostsList);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
      dispatch(fetchUsers());
    }
  }, []);

  return (
    <div className={"posts"}>
      <h1>Posts</h1>
      <Link className={"new-post"} to="/add-post">
        Écrivez un nouveau post !
      </Link>
      <div className={"post-list"}>
        {posts.map((post) => (
          <PostHome key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default List;
