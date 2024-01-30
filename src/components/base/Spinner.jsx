import React from 'react';
import SyncLoader from "react-spinners/ClipLoader";

const Spinner = () => {
    return (
        <div style={{'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'}}>
            <SyncLoader
                color="#000000"
                size={50} />
        </div>
    );
};

export default Spinner;