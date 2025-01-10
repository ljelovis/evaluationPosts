import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
});

export const addPost = createAsyncThunk("posts/addPost", async (post) => {
  const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
    ...post,
    userId: 1,
  });
  return res.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      });
  },
});

export default postsSlice.reducer;
