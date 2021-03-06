import React from 'react';
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFetch from '../../hooks/useFetch';

const List = () => {
    const { data, error, loading } = useFetch('/products/');

    const rows = data;

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Product</TableCell>
                        <TableCell className="tableCell">Type</TableCell>
                        <TableCell className="tableCell">Description</TableCell>
                        <TableCell className="tableCell">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row._id}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell className="tableCell">
                                <div className="cellWrapper">{row.title}</div>
                            </TableCell>
                            <TableCell className="tableCell">
                                {row.type}
                            </TableCell>
                            <TableCell className="tableCell">
                                {row.desc}
                            </TableCell>
                            <TableCell className="tableCell">
                                $ {row.price}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;
