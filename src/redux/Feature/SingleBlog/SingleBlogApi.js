import axios from "../../../utils/axios"

const getSingleBlog = async (title) => {
    const response = await axios('/blog');
    const allBlogs = await response.data;
    const filterBlog = allBlogs.filter(blog => blog.title.split(' ').join('-') === title);
    return filterBlog;
};
export default getSingleBlog;