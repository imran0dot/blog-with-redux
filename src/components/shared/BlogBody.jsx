import { useSelector } from "react-redux";
import Spinner from "../base/Spinner";

const BlogBody = () => {
    const { isLoading, isError, isMassage, data } = useSelector(state => state.singleBlog)
    const { id, image, isSave, likes, tags, title, description } = data;

    if (isLoading) {
        return <Spinner />
    }
    return (
        <main className="post">
            <img src={image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
            <div>
                <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                    {title}
                </h1>
                <div className="tags" id="lws-singleTags">
                {tags?.map((tag, index) => <span key={index}>#{tag}</span>)}
                </div>
                <div className="btn-group">
                    {/* <!-- handle like on button click --> */}
                    <button className="like-btn" id="lws-singleLinks">
                        <i className="fa-regular fa-thumbs-up"></i> {likes}
                    </button>
                    {/* <!-- handle save on button click --> */}
                    {/* <!-- use ".active" className and "Saved" text  if a post is saved, other wise "Save" --> */}
                    <button className="active save-btn" id="lws-singleSavedBtn">
                        <i className="fa-regular fa-bookmark"></i> {isSave}
                    </button>
                </div>
                <div className="mt-6">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </main>
    );
};

export default BlogBody;