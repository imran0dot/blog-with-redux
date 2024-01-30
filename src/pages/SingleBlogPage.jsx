import BlogBody from '../components/shared/BlogBody';
import BlogSidebar from '../components/shared/BlogSidebar';
const SingleBlogPage = () => {
    return (
        <section className="post-page-container">
            <BlogBody />
            <BlogSidebar />
        </section>
    );
};

export default SingleBlogPage;