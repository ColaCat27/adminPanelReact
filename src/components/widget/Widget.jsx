import { React, useState } from 'react';
import './widget.scss';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Widget = ({ type }) => {
    const { data, loading, error } = useFetch(`/${type}s/getCount`);

    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;

    if (!data) return <p>data not found</p>;

    let details;

    switch (type) {
        case 'user':
            details = {
                title: 'USERS',
                isMoney: false,
                amount: data.count,
                link: 'See all users',
                url: '/users/',
                icon: (
                    <PersonOutlineOutlinedIcon
                        style={{
                            color: 'crimson',
                            backgroundColor: 'rgba(255,0,0,0.2)',
                        }}
                        className="icon"
                    />
                ),
            };
            break;
        case 'product':
            details = {
                title: 'PRODUCTS',
                isMoney: false,
                amount: data.count,
                link: 'View all products',
                url: '/products/',
                icon: (
                    <LocalMallOutlinedIcon
                        style={{
                            color: 'goldenrod',
                            backgroundColor: 'rgba(218,165,32,0.2)',
                        }}
                        className="icon"
                    />
                ),
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{details.title}</span>
                <span className="counter">{details.amount}</span>
                <Link to={`${details.url}`} style={{ textDecoration: 'none' }}>
                    <span className="link">{details.link}</span>
                </Link>
            </div>
            <div className="right">{details.icon}</div>
        </div>
    );
};

export default Widget;
