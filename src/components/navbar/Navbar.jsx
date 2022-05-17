import { React, useContext } from 'react';
import './navbar.scss';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="items">
                    <div className="item">
                        <LanguageIcon className="icon" />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon
                            className="icon"
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                dispatch({ type: 'TOGGLE' });
                            }}
                        />
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <img
                            className="avatar"
                            src="https://images.pexels.com/photos/1404821/pexels-photo-1404821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
