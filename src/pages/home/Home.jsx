import React from 'react';
import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Table from '../../components/table/Table';
import useFetch from '../../hooks/useFetch';

const Home = () => {
    return (
        <div className="home">
            <Sidebar></Sidebar>
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="product" />
                </div>

                <div className="listContainer">
                    <div className="listTitle">Recently added</div>
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default Home;
