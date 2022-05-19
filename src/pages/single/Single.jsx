import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import List from '../../components/table/Table';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch.js';
import axios from 'axios';

const Single = () => {
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
                email: values[0].value || data.email,
                phone: values[1].value || data.phone,
                city: values[2].value || data.city,
                country: values[3].value || data.country,
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
                            <img
                                src={
                                    data.image ||
                                    'https://i.ibb.co/MBtjqXQ/no-avatar.gif'
                                }
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">{data.username}</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    {edit ? (
                                        <input
                                            type="text"
                                            className="editValue"
                                            placeholder={data.email}
                                        />
                                    ) : (
                                        <span className="itemValue">
                                            {data.email}
                                        </span>
                                    )}
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">
                                        {edit ? (
                                            <input
                                                type="text"
                                                className="editValue"
                                                placeholder={data.phone}
                                            />
                                        ) : (
                                            <span className="itemValue">
                                                {data.phone}
                                            </span>
                                        )}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">City:</span>
                                    {edit ? (
                                        <input
                                            type="text"
                                            className="editValue"
                                            placeholder={data.city}
                                        />
                                    ) : (
                                        <span className="itemValue">
                                            {data.city}
                                        </span>
                                    )}
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    {edit ? (
                                        <input
                                            type="text"
                                            className="editValue"
                                            placeholder={data.country}
                                        />
                                    ) : (
                                        <span className="itemValue">
                                            {data.country}
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

export default Single;
