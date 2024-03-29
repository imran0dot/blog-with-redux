import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PostItem = ({ item }) => {
    const {
        id,
        title,
        image,
        tags,
        likes,
        isSaved,
        createdAt
    } = item;


    return (
        <div className="lws-card">
            <a href="post.html">
                <img src={image} className="lws-card-image" alt="" />
            </a>
            <div className="p-4">
                <div className="lws-card-header">
                    <p className="lws-publishedDate">{createdAt}</p>
                    <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>{likes}</p>
                </div>
                <Link to={`/blog/${title.split(' ').join('-').toLowerCase()}`} className="lws-postTitle">{title}</Link>
                <div className="lws-tags">
                    {tags?.map((tag, index) => <span key={index}>#{tag}</span>)}
                </div>
                {/* <!-- Show this element if post is saved --> */}
                <div className="flex gap-2 mt-4">
                    <span className="lws-badge"> {isSaved ? 'saved' : 'Save'} </span>
                </div>
                {/* <!-- Show this element if post is saved Ends --> */}
            </div>
        </div>
    );
};

export default PostItem;