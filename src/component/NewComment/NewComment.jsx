import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../store/reducer/commentsSlice";
import "./style.css";

function NewComment({ postId }) {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addComment({
        postId: parseInt(postId),
        body: content,
        name: "Leanne Graham",
        userId: 1,
      })
    );
    setContent("");
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <form className={"comment-form"} onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={handleContentChange}
        className={"comment-area"}
        placeholder="Donnez votre avis"
      />
      <button className={"comment-btn"} type="submit">
        Poster le commentaire
      </button>
    </form>
  );
}

export default NewComment;
