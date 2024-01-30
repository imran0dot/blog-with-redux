import axios from "../../../utils/axios"

const getSingleBlog = async (title) => {
    const response = await axios('/blogs');
    const allBlogs = await response.data;
    const filterBlog = allBlogs.filter(blog => {
        const titleResize = blog.title.split(' ').join('-').toLowerCase();
        if(title === titleResize){
            return blog
        }
    });
    return filterBlog[0];
};
export default getSingleBlog;