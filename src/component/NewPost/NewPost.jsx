import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../store/reducer/postsSlice";
import "./style.css";

function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, body })).then(() => navigate("/"));
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <form className={"post-form flex"} onSubmit={handleSubmit}>
      <div className={"flex"}>
        <label>Titre du post :</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </div>
      <div className={"flex"}>
        <label>Contenu :</label>
        <textarea value={body} onChange={handleBodyChange} required></textarea>
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
}

export default NewPost;
