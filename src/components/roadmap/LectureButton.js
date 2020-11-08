import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { elements } from "components/roadmap/lectures"
import InLB from "components/group/InLB";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const buttons = [];
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows= [
  createData('', 159, 6.0, 24, 4.0),
  createData('', 237, 9.0, 37, 4.3),
  createData('', 262, 16.0, 24, 6.0),
  createData('', 305, 3.7, 67, 4.3),
  createData('', 356, 16.0, 49, 3.9),
  createData('', buttons[1], 16.0, 49, 3.9),
  createData('#기초프로그래밍', 356, 16.0, 49, 3.9),
  createData('', 356, 16.0, 49, 3.9),
  createData('', 356, 16.0, 49, 3.9),
];

 export const LectureButton = () => {

  const lectures = elements.map((lectures) => (lectures.name));

  const mkButton = (lectures) => {
    for (let index = 0; index < lectures.length; index++ ) {
       const group_lecture = lectures[index];
       const button = <Link to={{
        pathname: `/studygrouplist/group/${group_lecture}`,
        state: {group_lecture, userObj: null}
      }}>
        <button id ={group_lecture} >{group_lecture}</button>
      </Link>;
     buttons.push(button);
    } 

    return(BasicTable())
   }
          
       
   const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  } );
  //(mkButton.Element[button])
 // id(#'')}
 
  

  
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
          
 
  return( 
    <>
    <h2 id ='전공타이틀'>DB전공</h2>
    <div className='DB전공'> 
        {mkButton(lectures)}
         
        


         
    </div>

    <div>
      <button id='그룹생성'>
      <Link to="/sample_form">그룹 생성</Link>
      </button>
    </div>
    </>
  );



  };

export default LectureButton; 