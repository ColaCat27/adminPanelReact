import React from "react";
import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
    return (
        <div className="home">
            <Sidebar></Sidebar>
            <div className="homeContainer">
                container
            </div>
        </div>
    )
}

export default Home;