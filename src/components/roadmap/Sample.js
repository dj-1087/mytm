// 노마드 nwitt 파일 수정 중 --
//import { dbService } from "fbase";
import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { elements } from "components/roadmap/lectures"


// 튜터링 모여있는 테이블 만들기 --> 전공 필수, 전공 선택 강좌 31개 DT만 


// 알고리즘 선택 시 알고리즘 튜터링 모여있는 페이지 따로만들어? ㄴㄴ 빈 페이지에 강좌명==버튼이름인 모임만 나오게


const Sample = () => {
   const lectures = elements.map((lectures) => (lectures.name));
   const classes = elements.map((classes) => (classes.class));
   const mkButton = (lectures) => {
      const buttons = [];
      for (let index = 0; index < lectures.length; index++) {
          if(classes[index]=="전필"){
        const button = <Link to="/components/group/G_HS"><button id ='전필'>{lectures[index]}</button></Link>;
        buttons.push(button);
       }else{
         const button = <Link to="/components/group/G_HS"><button id ='전공선택'>{lectures[index]}</button></Link>;
         buttons.push(button);
       }
      }

      return (buttons)
    }
   return(
      <>
      {/*id ={elements[0].id}*/}
      <h2 id ='전공타이틀'>DB전공</h2>
      <div id='DB전공'>
      <Router>
         {mkButton(lectures)}
      </Router>
      </div>
      <div><button id='그룹생성'><Link to="/sample_form">그룹 생성</Link></button></div>
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