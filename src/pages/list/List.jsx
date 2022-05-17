import React from 'react';
import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';
import axios from 'axios';

const List = () => {
    const getData = async () => {
        const response = await axios.get('/users');
        console.log(response);
    };

    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datatable />
            </div>
        </div>
    );
};

export default List;
