import { React, useState } from 'react';
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { productColumn, userColumn, actionColumn } from '../../datatablesource';

const Datatable = () => {
    const { data, loading, error } = useFetch(`${window.location.pathname}/`);

    const path = window.location.pathname;

    let users = [];

    for (const key in data.data) {
        users.push(data.data[key]);
    }

    let column;

    const actionColumn = [
        {
            field: 'action',
            header: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link
                            to={`/users/${params.id}`}
                            style={{ texxtDecoration: 'none' }}
                        >
                            <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton">Delete</div>
                    </div>
                );
            },
        },
    ];

    switch (window.location.pathname) {
        case '/users':
            column = userColumn.concat(actionColumn);
            break;
        case '/products':
            column = productColumn.concat(actionColumn);
            break;
        default:
            return path;
    }

    // const handleDelete = (id) => {
    //     setData(data.filter((item) => item.id !== id));
    // };

    return (
        <div className="datatable">
            <div className="datatableTitle">
                Add New User
                <Link
                    to="/users/add"
                    style={{ textDecoration: 'none' }}
                    className="link"
                >
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={users}
                columns={column}
                pageSize={9}
                rowsPerPageOptions={[9]}
            />
        </div>
    );
};

export default Datatable;
