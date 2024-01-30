import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getSingleBlog from "./SingleBlogApi";

const initialState = {
    isLoading: false,
    isError: false,
    isMassage: '',
    data: {},
}

export const singleBlogaAsync = createAsyncThunk('singleBlog/fetchSingleBlog', async (title) => {
    const response = getSingleBlog(title);
    return response;
});

const singleBlogSlice = createSlice({
    name: 'singleBlog',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(singleBlogaAsync.fulfilled, (state, action) => {
                state.isError = false,
                    state.isLoading = false,
                    state.isMassage = '',
                    state.data = action.payload
            })
            .addCase(singleBlogaAsync.pending, (state, action) => {
                state.isError = false,
                    state.isLoading = true,
                    state.isMassage = '',
                    state.data = {}
            })
            .addCase(singleBlogaAsync.rejected, (state, action) => {
                state.isError = true,
                    state.isLoading = false,
                    state.isMassage = action.error.message,
                    state.data = {}
            })
    }
});

export default singleBlogSlice.reducer