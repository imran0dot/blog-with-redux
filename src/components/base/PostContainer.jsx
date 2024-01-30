import { useEffect } from "react";
import { fetchBlog } from "../../redux/Feature/Blog/BlogSlice";
import { useDispatch, useSelector } from 'react-redux'
import PostItem from "./PostItem";
import Spinner from "./Spinner";
const PostContainer = () => {
    const { isLoading, isError, isMassage, data } = useSelector(state => state.blog);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBlog())
    }, [])

    if (isError) {
        return <div>{isMassage}</div>
    }
    if (!isLoading) {
        return <Spinner />
    }
    return (
        <main className="post-container" id="lws-postContainer">
            {data?.map(item => <PostItem key={item.id} item={item} />)}
        </main>
    );
};

export default PostContainer;