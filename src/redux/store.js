import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../redux/Feature/Blog/BlogSlice'
const store = configureStore({
    reducer: {
        blog: blogsReducer
    }
});

export default store;