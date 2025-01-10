import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./reducer/postsSlice";
import usersSlice from "./reducer/usersSlice";
import commentsSlice from "./reducer/commentsSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice,
    users: usersSlice,
    comments: commentsSlice,
  },
});

export default store;
