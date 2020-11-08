import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HashRouter as Router, Link } from "react-router-dom";
import { elements } from "components/roadmap/lectures";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const splitBySchoolYear = () => {
  let schoolYears = [[], [], [], []];
  for (const lecture of elements) {
    const lectureBtn = (
      <Link
        to={{
          pathname: `/studygrouplist/group/${lecture.name}`,
          state: { group_lecture: lecture.name, userObj: null },
        }}
      >
        <button id={lecture.name}>{lecture.name}</button>
      </Link>
    );
    switch (lecture.grade) {
      case "1학년":
        schoolYears[0].push(lectureBtn);
        break;
      case "2학년":
        schoolYears[1].push(lectureBtn);
        break;
      case "3학년":
        schoolYears[2].push(lectureBtn);
        break;

      default:
        schoolYears[3].push(lectureBtn);
        break;
    }
  }
  console.log(schoolYears);
  return schoolYears;
};
function createData(freshman, sophomore, junior, senior) {
  return { freshman, sophomore, junior, senior };
}

const createRows = (schoolYears) => {
  const rowsValue = [];
  const max = Math.max(
    schoolYears[0].length,
    schoolYears[1].length,
    schoolYears[2].length,
    schoolYears[3].length
  );
  for (let i = 0; i < max; i++) {
    rowsValue.push(
      createData(
        schoolYears[0][i],
        schoolYears[1][i],
        schoolYears[2][i],
        schoolYears[3][i]
      )
    );
  }
  return rowsValue;
};

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>로드맵</TableCell>
            <TableCell align="right">1학년</TableCell>
            <TableCell align="right">2학년</TableCell>
            <TableCell align="right">3학년</TableCell>
            <TableCell align="right">4학년</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {createRows(splitBySchoolYear()).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.freshman}</TableCell>
              <TableCell align="right">{row.sophomore}</TableCell>
              <TableCell align="right">{row.junior}</TableCell>
              <TableCell align="right">{row.senior}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
