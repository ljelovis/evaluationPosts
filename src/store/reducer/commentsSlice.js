import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (postId) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    return res.data;
  }
);

export const addComment = createAsyncThunk(
  "comments/addComment",
  async ({ postId, body, name, userId }) => {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/comments",
      {
        postId,
        body,
        name,
        userId,
      }
    );
    return res.data;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default commentsSlice.reducer;
