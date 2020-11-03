import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";


//메뉴
const Navigation = () => {
  return (
    <div>
      <Router>
        <ul>
          <li><Link to="/components/roadmap/lectures">로드맵</Link></li>
          <li><Link to="/studygroup">스터디/튜터링</Link></li>
          <li><Link to="/contestgroup">공모전/대회</Link></li>
          <li><Link to="/profile">마이페이지</Link></li>
          <li><Link to="/sample_form">스터디그룹 폼</Link></li>
          <li><Link to="/login">로그인</Link></li>
        </ul>
      </Router>
    </div>
  )
}
export default Navigation;