import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function TotalAppointments({appointments}) {
  const classes = useStyles();

  const handleClik = (data) => {
    fetch('http://localhost:3010/prescriptions', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type':'application/json'
      }
    })
    .then(res => res.json())
    .then(success => {
      console.log('Data Added Successfully');
    })

    // deleting clicked data from the appoint collection
    fetch(`http://localhost:3010/delete/${data._id}`, {
    method: 'DELETE'
    })
    .then(res => res.json())
    .then(success => {
      if(success){
        document.getElementById(`${data._id}`).style.display = 'none';
      }
    })
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
            <TableCell align="right">Patient Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Subject</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row, index) => (
            <TableRow id={`${row._id}`} key={row._id}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">{row.patientName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{new Date(row.dateState).toDateString()}</TableCell>
              <TableCell align="right">{row.cardData.subject}</TableCell>
              <TableCell align="right"> <button onClick={() => handleClik( row)} className="btn btn-info">Pending</button> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
