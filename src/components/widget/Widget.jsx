import React from 'react';
import "./widget.scss";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({type}) => {
    let data;

    const amount = 100;
    const diff = 20;

    switch(type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlineOutlinedIcon style={{
                    color: "crimson",
                    backgroundColor: "rgba(255,0,0,0.2)"
                }}
                className="icon"/>
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <LocalMallOutlinedIcon
                    style={{
                        color: "goldenrod",
                        backgroundColor: "rgba(218,165,32,0.2)"
                    }}
                    className="icon"/>
            }
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: <PaymentIcon
                    style={{
                        color: "green",
                        backgroundColor: "rgba(0,128,0,0.2)"
                    }}
                    className="icon"/>
            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon
                    style={{
                        color: "purple",
                        backgroundColor: "rgba(128,0,128,0.2)"
                    }}
                    className="icon"/>
            }
            break;
        default:
            break;

    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ArrowDropUpIcon/>
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget;