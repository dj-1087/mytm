import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { elements } from "components/roadmap/lectures";
import InLB from "components/group/InLB";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export const LectureButton = () => {
  const a = document.getElementById("자료구조");

  const buttons = [];
  const lectures = elements.map((lectures) => lectures.name);

  const mkButton = (lectures) => {
    for (let index = 0; index < lectures.length; index++) {
      const group_lecture = lectures[index];
      const button = (
        <Link
          to={{
            pathname: `/studygrouplist/group/${group_lecture}`,
            state: { group_lecture, userObj: null },
          }}
        >
          <button id={group_lecture}>{group_lecture}</button>
        </Link>
      );
      buttons.push(button);
    }
    //return(buttons)
  };

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  //(mkButton.Element[button])
  // id(#'')}

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
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
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

  function BasicTable() {
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
            {createRows(splitBySchoolYear()).map((row) => (
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

  return (
    <>
      {splitBySchoolYear()}
      <h2 id="전공타이틀">DB전공</h2>
      <div className="DB전공">
        {mkButton(lectures)}
        {BasicTable()}
        {a}
      </div>

      <div>
        <button id="그룹생성">
          <Link to="/sample_form">그룹 생성</Link>
        </button>
      </div>
    </>
  );
};

export default LectureButton;
