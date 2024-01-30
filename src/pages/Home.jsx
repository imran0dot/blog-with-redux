import FIlterbar from "../components/base/FIlterbar";
import PostContainer from "../components/base/PostContainer";

const Home = () => {
    return (
        <div className="wrapper">
                <FIlterbar />
            <PostContainer />
        </div>
    );
};

export default Home;