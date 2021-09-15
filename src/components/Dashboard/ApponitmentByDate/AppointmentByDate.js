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
    minWidth: "100%",
  },
});


export default function AppointmentByDate({appointments}) {
  const classes = useStyles();
 const index = 0 ;
  return (
    <TableContainer className ="w-100" component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row, index) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {index + 1 }
              </TableCell>
              <TableCell align="right">{row.patientName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
