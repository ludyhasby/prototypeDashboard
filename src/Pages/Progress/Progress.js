import React, { useState } from 'react';
import "./progress.css"
import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper';
import {useLocation} from "react-router-dom";
import { useEffect } from "react";
import Modal from './Modal';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  { field: 'html', headerName: 'HTML', width: 130 },
  { field: 'css', headerName: 'CSS', width: 130 },
  { field: 'js', headerName: 'Javascript', width: 130 },
  { field: 'react', headerName: 'React', width: 130 },
  { field: 'vite', headerName: 'React Vite', width: 130 },
  { field: 'uiux', headerName: 'UI/UX', width: 130 },
  { field: 'action', headerName: 'Action', width: 230, 
    renderCell:(params)=>{
      return (
        <button className='userListEdit'>Edit</button>
      )
    }

   },
];
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Hakim', firstName: 'Fulan', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 23 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: 23 },
  { id: 16, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 20, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 21, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 22, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 23, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 24, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 25, lastName: 'Targaryen', firstName: 'Daenerys', age: 23 },
  { id: 26, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 27, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 28, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 29, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 30, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 31, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 32, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 33, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 34, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 35, lastName: 'Targaryen', firstName: 'Daenerys', age: 23 },
  { id: 36, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 37, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 38, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 39, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 40, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 41, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 42, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 43, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 44, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 45, lastName: 'Targaryen', firstName: 'Daenerys', age: 23 },
  { id: 46, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 47, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 48, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 49, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 50, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 51, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 52, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 53, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 54, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 55, lastName: 'Targaryen', firstName: 'Daenerys', age: 23 },
  { id: 56, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 57, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 58, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 59, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 60, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
];
rows.forEach((row)=>{
    if(row.firstName==='Fulan'){
        row.html = 98;
        row.css = 102; 
        row.js = 120; 
        row.react =140; 
        row.vite = 140; 
        row.uiux = 65; 
    }
    else{
        row.html = 50 + Math.ceil(Math.random()*100);
        row.css = 50 + Math.ceil(Math.random()*100);
        row.js = 50 + Math.ceil(Math.random()*100);
        row.react = 50 + Math.ceil(Math.random()*100);
        row.vite = 50 + Math.ceil(Math.random()*100);
        row.uiux = 50 + Math.ceil(Math.random()*100);
    }
})

export default function Progress() {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    if (!isAuth) {
      window.alert("Silahkan Masukkan Password Terlebih Dahulu !");
    }
  }, [isAuth]);

  const handleSubmit = (password) => {
    if (password === "admin") {
      setAuth(true);
    } else {
      alert("Password salah!");
    }
  };

  if (!isAuth) {
    return (
      <div className='progress'>
        <Modal onSubmit={handleSubmit} />
      </div>
    )
  }

  return (
    <div className='progress'>
      <h4>Learning Progress or Scores in Teams (in 150 Scales)</h4>
      <Paper sx={{ height: "90vh", width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  )
}