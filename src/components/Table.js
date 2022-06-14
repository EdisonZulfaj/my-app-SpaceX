import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './table.css'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
];

export default function BasicTable(props) {
  return (
    <TableContainer sx={{ maxWidth: 650, backgroundColor: 'transparent' }} component={Paper} >
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'><p>Height</p></TableCell>
            <TableCell align="center"><p>Diameter</p></TableCell>
            <TableCell align="center"><p>Stages</p></TableCell>
            <TableCell align="center"><p>Cost per launch</p></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
            
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="center"><p>{props.height}</p></TableCell>
              <TableCell align="center"><p>{props.diameter}</p></TableCell>
              <TableCell align="center"><p>{props.stages}</p></TableCell>
              <TableCell align="center"><p>{props.cpl}</p></TableCell>
             
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
