import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';


//메뉴
const Navigation = (isLoggedIn) => {
  return (
    <div>
      <Router>
      <button id = '메뉴'>
      <MenuIcon color="primary"/>
        <ul>
          <li><Link to="/components/roadmap/lectures">로드맵</Link></li>
          <li><Link to="/studygrouplist/group/all">스터디/튜터링</Link></li>
          <li><Link to="/contestgroup">공모전/대회</Link></li>
          <li><Link to="/Mypage">마이페이지</Link></li>
          <li><Link to="/sample_form">스터디그룹 폼</Link></li>
          {isLoggedIn ? (
            <li><Link to="/login">로그인</Link></li>
          ):(
            <li><Link to="/">로그아웃</Link></li>
          )}
          <li><Link to="/components/roadmap/p">로드맵표</Link></li>
        </ul>
        </button>
      </Router>
    </div>
  )
}
export default Navigation;