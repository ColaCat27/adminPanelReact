import './singleProduct.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import List from '../../components/table/Table';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch.js';
import axios from 'axios';

const SingleProduct = () => {
    const [info, setInfo] = useState();
    const [edit, setEdit] = useState(false);

    const location = useLocation();
    const path = location.pathname;

    const { data, loading, error } = useFetch(`${path}`);

    useEffect(() => {
        setInfo(data);
    }, [data]);

    const editProfile = async (key) => {
        if (!edit) {
            setEdit(true);
        } else {
            setEdit(false);
            const values = document.querySelectorAll('.editValue');
            let newData = {
                title: values[0].value || data.title,
                type: values[1].value || data.type,
                description: values[2].value || data.desc,
                price: values[3].value || data.price,
            };
            newData = Object.assign(info, newData);
            try {
                await axios.put(`${path}`, newData);
                setInfo(newData);
            } catch (err) {
                console.log(error);
            }
        }
    };

    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton" onClick={editProfile}>
                            {edit ? 'Save' : 'Edit'}
                        </div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            {/* <img
                                src={
                                    data.image ||
                                    'https://i.ibb.co/MBtjqXQ/no-avatar.gif'
                                }
                                alt=""
                                className="itemImg"
                            /> */}
                            <div className="details">
                                <h1 className="itemTitle">{data.title}</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Title:</span>
                                    {edit ? (
                                        <input
                                            type="text"
                                            className="editValue"
                                            placeholder={data.title}
                                        />
                                    ) : (
                                        <span className="itemValue">
                                            {data.title}
                                        </span>
                                    )}
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Type:</span>
                                    <span className="itemValue">
                                        {edit ? (
                                            <input
                                                type="text"
                                                className="editValue"
                                                placeholder={data.type}
                                            />
                                        ) : (
                                            <span className="itemValue">
                                                {data.type}
                                            </span>
                                        )}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">
                                        Description:
                                    </span>
                                    {edit ? (
                                        <input
                                            type="text"
                                            className="editValue"
                                            placeholder={data.desc}
                                        />
                                    ) : (
                                        <span className="itemValue">
                                            {data.desc}
                                        </span>
                                    )}
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Price:</span>
                                    {edit ? (
                                        <input
                                            type="text"
                                            className="editValue"
                                            placeholder={data.price}
                                        />
                                    ) : (
                                        <span className="itemValue">
                                            {data.price}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
