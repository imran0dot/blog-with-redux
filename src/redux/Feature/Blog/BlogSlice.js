import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getBlogs from "./BlogApi";

const initialState = {
  isLoading: false,
  isError: false,
  isMessage: "",
  data: [],
};

export const fetchBlog = createAsyncThunk("blogs/fetchblogs", async () => {
  const blogs = await getBlogs();
  return blogs;
});

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isError = false;
        state.isLoading = false;
        state.isMessage = "";
      })
      .addCase(fetchBlog.pending, (state) => {
        state.data = [];
        state.isError = false;
        state.isLoading = true;
        state.isMessage = "";
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.data = [];
        state.isError = true;
        state.isLoading = false;
        state.isMessage = action.error.message;
      });
  },
});

export default blogSlice.reducer;