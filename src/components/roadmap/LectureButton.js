// 노마드 nwitt 파일 수정 중 --
//import { dbService } from "fbase";
import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { elements } from "components/roadmap/lectures"

// 튜터링 모여있는 테이블 만들기 --> 전공 필수, 전공 선택 강좌 31개 DT만 


// 알고리즘 선택 시 알고리즘 튜터링 모여있는 페이지 따로만들어? ㄴㄴ 빈 페이지에 강좌명==버튼이름인 모임만 나오게


const LectureButton = () => {
  const lectures = elements.map((lectures) => (lectures.name));
  const mkButton = (lectures) => {
  const buttons = [];

  for (let index = 0; index < lectures.length; index++) {
    const button = <Link to="/components/group/InLB"><button id ={lectures[index]}>{lectures[index]}</button></Link>;
    buttons.push(button);
  }return (buttons)
}


  /* for (let index = 0; index < lectures.length; index++) {
      if(학년[index]=="1학년" && classes[index]=="전필"){
        const button = <Link to="/components/group/InLB"><button id = {lectures[index]}>{lectures[index]}</button></Link>;
        buttons.push(button);
      }else if(학년[index]=="2학년" && classes[index]=="전필"){
        const button = <Link to="/components/group/InLB"><button id ='이학년전필'>{lectures[index]}</button></Link>;
        buttons.push(button);
      }else if(학년[index]=="2학년" && classes[index]=="전선"){
        const button = <Link to="/components/group/InLB"><button id ='이학년전선'>{lectures[index]}</button></Link>;
        buttons.push(button);
      }else if(학년[index]=="3학년" && classes[index]=="전필"){
        const button = <Link to="/components/group/InLB"><button id ='삼학년전필'>{lectures[index]}</button></Link>;
        buttons.push(button);
      }else if(학년[index]=="3학년" && classes[index]=="전선"){
        const button = <Link to="/components/group/InLB"><button id ='삼학년전선'>{lectures[index]}</button></Link>;
        buttons.push(button);
      }else if(학년[index]=="4학년" && classes[index]=="전선"){
        const button = <Link to="/components/group/InLB"><button id ='사학년전선'>{lectures[index]}</button></Link>;
        buttons.push(button);
      }
    }*/
    /*for (let index = 0; index < lectures.length; index++) {
      if(classes[index]=="전필"){
        const button = <Link to="/components/group/InLB"><button id ='전필'>{lectures[index]}</button></Link>;
        buttons.push(button);
      }else{
        const button = <Link to="/components/group/InLB"><button id ='전공선택'>{lectures[index]}</button></Link>;
        buttons.push(button);
      }
    }*/
    
  return(
    <>
    <h2 id ='전공타이틀'>DB전공</h2>

    <div className='DB전공'> /*라우터 필요 없어보여서 지움*/ 
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


// 링크 ㄴㅁ어가는거 봤으니까 스터디 그룹 폼을 DB에 저장 DB에서 특정 데이터를 반환 하는 것 구현


export default LectureButton;