export const productColumn = [
    {
        field: 'title',
        header: 'Title',
        width: 300,
    },
    {
        field: 'description',
        header: 'Description',
        width: 300,
    },
];

export const userColumn = [
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
