// 노마드 nwitt 파일 수정 중 --
//import { dbService } from "fbase";
import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { elements } from "components/roadmap/lectures"


// 튜터링 모여있는 테이블 만들기 --> 전공 필수, 전공 선택 강좌 31개 DT만 


// 알고리즘 선택 시 알고리즘 튜터링 모여있는 페이지 따로만들어? ㄴㄴ 빈 페이지에 강좌명==버튼이름인 모임만 나오게


const Sample = () => {
   const lectures = elements.map((lecture) => (lecture.name));
   const mkButton = (lectures) => {
      const buttons = [];
      for (let index = 0; index < lectures.length; index++) {
        const button = <Link to="/components/group/G_HS"><button>{lectures[index]}</button></Link>;
        buttons.push(button);
      }

      return (buttons)
    }
   return(
      <>
      <h2 id ='전공타이틀'>DB전공</h2>
      <div id='DB전공'>
      <Router>
         {mkButton(lectures)}
      </Router>
      {/*<Router>
         <Link to="/components/group/G_HS"></Link>
         <button id ="전필"><Link to="/components/group/G_HS">{lectures.elements[1].name}</Link></button> 
         <button id ="전필"><Link to="/components/group/G_HS">기초프로그래밍2</Link></button> 
         <button id ="전필"><Link to="/components/group/G_HS">자료구조</Link></button> 
         <button id ="전필"><Link to="/components/group/G_HS">R통계분석</Link></button> 
         <button id ="전필"><Link to="/components/group/G_HS">알고리즘</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">통계적데이터분석</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">기초웹프로그래</Link></button> 
         <button id ="전필"><Link to="/components/group/G_HS">운영체제</Link></button> 
         <button id ="전필"><Link to="/components/group/G_HS">소프트웨어공학</Link></button> 
         <button id ="전필"><Link to="/components/group/G_HS">인공지능</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">고급웹프로그래밍</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">컴퓨터아키텍</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">UX디자인</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">소프트위어인턴쉽</Link></button> 
         <button id ="전필"><Link to="/components/group/G_HS">데이터베이스</Link></button> 
         <button id ="전필"><Link to="/components/group/G_HS">빅데이터프로그래밍</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">자기주도학습(2)</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">소프트웨어세미나(1)</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">컴퓨터통신</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">게임프로그래밍</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">캠스톤디자인</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">딥러닝</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">데이터베이스프로젝트</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">모바일컴퓨팅</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">빅데이터기술특론1</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">현장실무교육</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">캠스톤디자인2</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">데이터사이언스</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">블록체인기초</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">클라우드시스템</Link></button> 
         <button id ="DB"><Link to="/components/group/G_HS">빅데이터기술특론2</Link></button> 
        
         <button id='그룹생성'><Link to="/sample_form">그룹 생성</Link></button>
      </Router>*/}
      </div>
      </>
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