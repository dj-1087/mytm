import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";

const Table = () => {
  return(
    <Router>  
      <button id="basic">A모임 기본 정보 출력</button> 
      <button id="basic">B모임 기본 정보 출력</button>
      <button id="basic">C모임 기본 정보 출력</button>
    </Router>);
};
/*
<form name="testForm" id="testForm">
    <input type="text" name="name" id="name" value="홍길동" />
    <input type="text" name="id" id="id" value="1234567" />
</form>


    function to_ajax(){
  
 
      var queryString = $("form[name=testForm]").serialize() ;

      $.ajax({
          type : 'post',
          url : '/test.jsp',
          data : queryString,
          dataType : 'json',
          error: function(xhr, status, error){
              alert(error);
          }
          ,success : function(json){
              alert(json)
          },
      });

  }
*/

export default Table;