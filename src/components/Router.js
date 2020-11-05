import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "components/Navigation"
import Home from "routes/Home";
//import Roadmap from "routes/Roadmap";
import StudyGroupList from "components/group/StudyGroupList";
import ContestGroup from "routes/ContestGroup";
import Mypage from "routes/Mypage";
import Profile from "routes/Profile";
import StudyGroupForm from "components/group/StudyGroupForm";
import LectureButton from "components/roadmap/LectureButton";
import Table from "components/group/InLB";
import Auth from "routes/Auth"
import BasicTable from "components/roadmap/p";

//경로
const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  return (
    <Router>
        <Navigation isLoggedIn={isLoggedIn, userObj} />
      <Switch>
        <Route path="/" exact={true} component={Home}>Home</Route>
        <Route path="/components/roadmap/lectures" exact={true} component={LectureButton}></Route>
        <Route path="/components/group/InLB" exact={true} component={Table}></Route>
        <Route path={`/studygrouplist/group/:group_lecture`} exact={true} component={StudyGroupList}></Route>
        <Route path="/contestgroup" exact={true} component={ContestGroup}></Route>
        <Route path="/Mypage" exact={true} component={Mypage}></Route>
        <Route path="/profile" exact={true}><Profile userObj={userObj} refreshUser={refreshUser} /></Route>
        <Route path="/sample_form" exact={true} component={StudyGroupForm}></Route>
        <Route path="/components/roadmap/p" exact={true} component={BasicTable}></Route>
        <Route path="/login" exact={true} component={Auth}></Route>
      </Switch>
    </Router>
  );
}
export default AppRouter;