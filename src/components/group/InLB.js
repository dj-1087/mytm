import React from "react";
import { HashRouter as Router } from "react-router-dom";

const Table = () => {
  return(
    <Router>
      <button id="basic">A모임 기본 정보 출력</button> 
      <button id="basic">B모임 기본 정보 출력</button>
      <button id="basic">C모임 기본 정보 출력</button>
    </Router>);
};

export default Table;