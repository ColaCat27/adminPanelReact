import React from 'react';
import './widget.scss';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Widget = ({ type }) => {
    let data;

    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                amount: 1,
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
            data = {
                title: 'PRODUCTS',
                isMoney: false,
                amount: 2,
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
                <span className="title">{data.title}</span>
                <span className="counter">{data.amount}</span>
                <Link to={data.url} style={{ textDecoration: 'none' }}>
                    <span className="link">{data.link}</span>
                </Link>
            </div>
            <div className="right">{data.icon}</div>
        </div>
    );
};

export default Widget;
