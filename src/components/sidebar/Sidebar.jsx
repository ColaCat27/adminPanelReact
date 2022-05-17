import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
    const dispatchTheme = useContext(DarkModeContext).dispatch;

    const dispatchAuth = useContext(AuthContext).dispatch;

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span className="logo">Working Space</span>
                </Link>
            </div>
            <hr></hr>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonOutlineOutlinedIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: 'none' }}>
                        <li>
                            <AddBusinessOutlinedIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <p className="title">USER</p>
                    <li>
                        <LogoutOutlinedIcon className="icon" />
                        <span
                            onClick={() => {
                                dispatchAuth({ type: 'LOGOUT' });
                            }}
                        >
                            Log out
                        </span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div
                    className="colorOption"
                    onClick={() => {
                        dispatchTheme({ type: 'LIGHT' });
                    }}
                ></div>
                <div
                    className="colorOption"
                    onClick={() => {
                        dispatchTheme({ type: 'DARK' });
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Sidebar;
