import axios from "../../../utils/axios";

const getBlogs = async() => {
    const responce = await axios('/blogs');
    const data = await responce.data;
    return data;
};

export default getBlogs;