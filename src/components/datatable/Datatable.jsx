import { React, useState } from 'react';
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Datatable = () => {
    const { data, loading, error } = useFetch('/users/');

    let users = [];

    for (const key in data.data) {
        users.push(data.data[key]);
    }

    const userColumns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 180,
        },
        {
            field: 'user',
            headerName: 'User',
            width: 230,
            renderCell: (params) => {
                return <div className="cellWithImg">{params.row.username}</div>;
            },
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 150,
        },
        {
            field: 'age',
            headerName: 'Age',
            width: 100,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 160,
            renderCell: (params) => {
                return (
                    <div className={`cellWithStatus ${params.row.status}`}>
                        {params.row.status}
                    </div>
                );
            },
        },
    ];
    // const handleDelete = (id) => {
    //     setData(data.filter((item) => item.id !== id));
    // };
    const actionColumn = [
        {
            field: 'action',
            header: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link
                            to="/users/test"
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
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
            />
        </div>
    );
};

export default Datatable;
