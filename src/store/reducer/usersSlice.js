import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default usersSlice.reducer;
