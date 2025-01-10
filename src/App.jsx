import { Routes, Route } from "react-router-dom";
import List from "./component/List/List";
import PostDetail from "./component/PostDetail/PostDetail";
import NewPost from "./component/NewPost/NewPost";
import Nav from "./component/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/add-post" element={<NewPost />} />
      </Routes>
    </>
  );
}

export default App;
