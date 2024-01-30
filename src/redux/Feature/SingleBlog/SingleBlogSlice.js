import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getSingleBlog from "./SingleBlogApi";

const initialState = {
    isLoading: false,
    isError: false,
    isMassage: '',
    data: {},
}

export const singleBlogAsync = createAsyncThunk('singleBlog/fetchSingleBlog', async (title) => {
    const response = getSingleBlog(title);
    return response;
});

const singleBlogSlice = createSlice({
    name: 'singleBlog',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(singleBlogAsync.fulfilled, (state, action) => {
                state.isError = false,
                    state.isLoading = false,
                    state.isMassage = '',
                    state.data = action.payload
            })
            .addCase(singleBlogAsync.pending, (state, action) => {
                state.isError = false,
                    state.isLoading = true,
                    state.isMassage = '',
                    state.data = {}
            })
            .addCase(singleBlogAsync.rejected, (state, action) => {
                state.isError = true,
                    state.isLoading = false,
                    state.isMassage = action.error.message,
                    state.data = {}
            })
    }
});

export default singleBlogSlice.reducer