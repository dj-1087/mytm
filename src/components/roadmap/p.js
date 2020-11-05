import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { LectureButton } from 'components/roadmap/LectureButton.js';
let val = LectureButton();  

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [

  createData(<button>와진짜 대박이다 이거다 어떻게 갖고오지?</button>, 159, 6.0, 24, 4.0),
  createData('알고리즘', 237, 9.0, 37, 4.3),
  createData('', 262, 16.0, 24, 6.0),
  createData(val, 305, 3.7, 67, 4.3),
  createData('', 356, 16.0, 49, 3.9),
  createData('', 356, 16.0, 49, 3.9),
  createData('', 356, 16.0, 49, 3.9),
  createData('', 356, 16.0, 49, 3.9),
  createData('', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const classes = useStyles();
  //var name_by_id = document.getElementById("기초프로그래밍").getAttribute('name');
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">1학년 1학기</TableCell>
            <TableCell align="right">1학년 2학기</TableCell>
            <TableCell align="right">2학년 1학기</TableCell>
            <TableCell align="right">2학년 2학기</TableCell>
            <TableCell align="right">3학년 1학기</TableCell>
            <TableCell align="right">3학년 2학기</TableCell>
            <TableCell align="right">4학년 1학기</TableCell>
            <TableCell align="right">4학년 2학기</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}