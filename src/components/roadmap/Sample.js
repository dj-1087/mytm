// 노마드 nwitt 파일 수정 중 --
//import { dbService } from "fbase";
import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";

// 튜터링 모여있는 테이블 만들기 --> 전공 필수, 전공 선택 강좌 31개 DT만 


// 알고리즘 선택 시 알고리즘 튜터링 모여있는 페이지 따로만들어? ㄴㄴ 빈 페이지에 강좌명==버튼이름인 모임만 나오게


const Sample = () => {
   return(
      <Router>
         <button id ="알고리즘"><Link to="/components/group/G_HS">알고리즘</Link></button> 
         <button><Link to="/sample_form">그룹 생성</Link></button>
      </Router>
   );
   //<button onClick={onMakeCLick}>그룹 생성</button>
  /* return(
   <Router>
        <ul>
       <Link to="/components/group/Sample">그룹 생성</Link>
        </ul>
   </Router>);*/
};

// 링크 ㄴㅁ어가는거 봤으니까 스터디 그룹 폼을 DB에 저장 DB에서 특정 데이터를 반환 하는 것 구현


export default Sample;