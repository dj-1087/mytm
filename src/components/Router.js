import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "components/Navigation";
import Home from "routes/Home";
//import Roadmap from "routes/Roadmap";
import StudyGroupList from "components/group/StudyGroupList";
import Detail from "components/group/Detail";
import ContestGroup from "routes/ContestGroup";
import Mypage from "routes/Mypage";
import Profile from "routes/Profile";
import StudyGroupForm from "components/group/StudyGroupForm";
import LectureChips from "components/roadmap/LectureBtn";
import Table from "components/group/InLB";
import Auth from "routes/Auth";
import BasicTable from "components/roadmap/LectureBtn";

//경로
const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  console.log(`라우터_userObj:`);
  console.log(userObj);
  console.log(`라우터_isLoggedIn: ${isLoggedIn}`);
  return (
    <Router>
      <Navigation isLoggedIn={isLoggedIn} userObj={userObj} />
      <Switch>
        <Route path="/" exact={true} component={Home}>
          Home
        </Route>
        {/*<Route
          path="/components/roadmap/lectures"
          exact={true}
          component={(LectureButton_copy, BasicTable, buttons)}
        ></Route>*/}
        <Route
          path="/components/roadmap/lectures"
          exact={true}
          component={BasicTable}
        ></Route>
        <Route
          path="/components/group/InLB"
          exact={true}
          component={Table}
        ></Route>
        <Route
          path={`/studygrouplist/group/:group_lecture`}
          exact={true}
          component={StudyGroupList}
        ></Route>
        <Route
          path={`/studygrouplist/group_name/:group_name`}
          exact={true}
          component={Detail}
        ></Route>
        <Route
          path="/contestgroup"
          exact={true}
          component={ContestGroup}
        ></Route>
        <Route path="/Mypage" exact={true}>
          <Mypage refreshUser={refreshUser} userObj={userObj} />
        </Route>
        <Route path="/Profile" exact={true}>
          <Profile refreshUser={refreshUser} userObj={userObj} />
        </Route>
        <Route path="/sample_form" exact={true}>
          <StudyGroupForm userObj={userObj} />
        </Route>
        <Route path="/login" exact={true} component={Auth}></Route>
      </Switch>
    </Router>
  );
};
export default AppRouter;
