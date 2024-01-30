import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../redux/Feature/Blog/BlogSlice'
import singleBlogReducer from './Feature/SingleBlog/SingleBlogSlice';
const store = configureStore({
    reducer: {
        blog: blogsReducer,
        singleBlog: singleBlogReducer
    }
});

export default store;