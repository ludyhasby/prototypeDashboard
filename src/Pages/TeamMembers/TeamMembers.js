import React, { useState } from 'react';
import "./teammembers.css";
import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper';
import members from "./dataStatics";
import Modal from './Modal';

const dataJob = [
  'Machine Learning Engineer', 
  'Backend Developer', 
  'Frontend Engineer', 
  'UI/UX Designer', 
  'DevOps Engineer', 
  'Cloud Computing', 
  'System Analyst'
]; 
const skills = [
  'Python, Tensorflow, Pytorch', 
  'Nodejs, ExpressJS, Javascript', 
  'Javascript, CSS, HTML, React', 
  'Figma, CSS, HTML, React', 
  'CI/CD, Docker, AWS', 
  'AWS, GCP, Netlify', 
  'SQL, Analytical, Business'
]

export default function TeamMembers() {
  const [rows, setRows] = useState(members);
  const [modalOpen, setModalOpen] = useState(false); 
  const [rowToEdit, setRowToEdit] = useState(null);

  rows.forEach((row) => {
    const randomize = Math.floor(Math.random() * dataJob.length); 
    row.job = dataJob[randomize];
    row.skills = skills[randomize]; 
  });

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
            return newRow;
          })
        );
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 , editable: true}, 
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    { field: 'job', headerName: 'Job Field', width: 150 },
    { field: 'skills', headerName: 'Skills', width: 260 },
    { field: 'action', headerName: 'Action', width: 130, 
      renderCell:(params)=>{
        return (
          <button className='userListEdit' onClick={()=> {setRowToEdit(params.row.id);setModalOpen(true);}}>Edit</button>
        )
      }

    },
  ];

  return (
    <div className='teamMembers'>
      <h4>Team Members List with Jobs and Skills</h4>
      <Paper sx={{ height: "90vh", width: '100%' }}>
        {modalOpen && <Modal onSubmit={handleSubmit} defaultValue={rows[rowToEdit]} 
        closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
        />}
        <DataGrid
          rows={rows}
          columns={columns}
          // initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  )
}
