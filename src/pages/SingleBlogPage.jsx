import { useParams } from 'react-router-dom';
import BlogBody from '../components/shared/BlogBody';
import BlogSidebar from '../components/shared/BlogSidebar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { singleBlogAsync } from '../redux/Feature/SingleBlog/SingleBlogSlice';
const SingleBlogPage = () => {
    const { title } = useParams();
    const dispacth = useDispatch();
    
    useEffect(() => {
        dispacth(singleBlogAsync(title))
    }, [dispacth, title]);

    return (
        <section className="post-page-container">
            <BlogBody />
            <BlogSidebar />
        </section>
    );
};

export default SingleBlogPage;