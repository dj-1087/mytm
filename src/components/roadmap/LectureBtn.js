import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HashRouter as Router, Link, useLocation } from "react-router-dom";
import { elements } from "components/roadmap/lectures";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useEffect } from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const splitBySchoolYear = (location) => {
  let schoolYears = [
    [[], []],
    [[], []],
    [[], []],
    [[], []],
  ];
  for (const lecture of elements) {
    const lectureBtn = (
      <Link
        to={{
          pathname: `/studygrouplist/group/${lecture.name}`,
          state: {
            group_lecture: lecture.name,
            userObj: location.state,
          },
        }}
      >
        <button id={lecture.name}>{lecture.name}</button>
      </Link>
    );
    if (lecture.grade == "1학년") {
      if (lecture.semester == "1학기") {
        schoolYears[0][0].push(lectureBtn);
      } else {
        schoolYears[0][1].push(lectureBtn);
      }
    } else if (lecture.grade == "2학년") {
      if (lecture.semester == "1학기") {
        schoolYears[1][0].push(lectureBtn);
      } else {
        schoolYears[1][1].push(lectureBtn);
      }
    } else if (lecture.grade == "3학년") {
      if (lecture.semester == "1학기") {
        schoolYears[2][0].push(lectureBtn);
      } else {
        schoolYears[2][1].push(lectureBtn);
      }
    } else if (lecture.grade == "4학년") {
      if (lecture.semester == "1학기") {
        schoolYears[3][0].push(lectureBtn);
      } else {
        schoolYears[3][1].push(lectureBtn);
      }
    }
  }
  console.log(schoolYears);
  return schoolYears;
};
function createData(
  freshman1,
  freshman2,
  sophomore1,
  sophomore2,
  junior1,
  junior2,
  senior1,
  senior2
) {
  return {
    freshman1,
    freshman2,
    sophomore1,
    sophomore2,
    junior1,
    junior2,
    senior1,
    senior2,
  };
}

const createRows = (schoolYears) => {
  const rowsValue = [];
  const max = (schoolYears) => {
    const arr = [];
    for (const grade of schoolYears) {
      arr.push(grade[0].length);
      arr.push(grade[1].length);
    }
    return Math.max.apply(null, arr);
  };

  const size = max(schoolYears);

  for (let i = 0; i < max(schoolYears); i++) {
    rowsValue.push(
      createData(
        schoolYears[0][0][i],
        schoolYears[0][1][i],
        schoolYears[1][0][i],
        schoolYears[1][1][i],
        schoolYears[2][0][i],
        schoolYears[2][1][i],
        schoolYears[3][0][i],
        schoolYears[3][1][i]
      )
    );
  }
  return rowsValue;
};

export default function BasicTable() {
  const location = useLocation();
  const classes = useStyles();
  console.log("lectureBtn");
  console.log(location);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>학년</TableCell>
            <TableCell align="center" colSpan="2">
              1학년
            </TableCell>
            <TableCell align="center" colSpan="2">
              2학년
            </TableCell>
            <TableCell align="center" colSpan="2">
              3학년
            </TableCell>
            <TableCell align="center" colSpan="2">
              4학년
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>학기</TableCell>
            <TableCell align="center">1학기</TableCell>
            <TableCell align="center">2학기</TableCell>
            <TableCell align="center">1학기</TableCell>
            <TableCell align="center">2학기</TableCell>
            <TableCell align="center">1학기</TableCell>
            <TableCell align="center">2학기</TableCell>
            <TableCell align="center">1학기</TableCell>
            <TableCell align="center">2학기</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {createRows(splitBySchoolYear(location)).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.freshman1}</TableCell>
              <TableCell align="center">{row.freshman2}</TableCell>
              <TableCell align="center">{row.sophomore1}</TableCell>
              <TableCell align="center">{row.sophomore2}</TableCell>
              <TableCell align="center">{row.junior1}</TableCell>
              <TableCell align="center">{row.junior2}</TableCell>
              <TableCell align="center">{row.senior1}</TableCell>
              <TableCell align="center">{row.senior2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
