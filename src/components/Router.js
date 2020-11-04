import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navigation from "components/Navigation"
import Home from "routes/Home";
//import Roadmap from "routes/Roadmap";
import StudyGroupList from "components/group/StudyGroupList";
import ContestGroup from "routes/ContestGroup";
import Profile from "routes/Profile";
import StudyGroupForm from "components/group/StudyGroupForm";
import LectureButton from "components/roadmap/LectureButton";
import Table from "components/group/InLB";
import Auth from "routes/Auth"


//경로
const AppRouter = ({userObj}) => {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact={true} component={Home}>Home</Route>
      <Route path="/components/roadmap/lectures" exact={true} component={LectureButton}></Route>
      <Route path="/components/group/InLB" exact={true} component={Table}></Route>
      <Route path="/studygrouplist" exact={true}><StudyGroupList userObj={userObj}/></Route>
      <Route path="/contestgroup" exact={true} component={ContestGroup}></Route>
      <Route path="/profile" exact={true} component={Profile}></Route>
      <Route path="/sample_form" exact={true} component={StudyGroupForm}></Route>
      <Route path="/login" exact={true} component={Auth}></Route>
    </Router>
  );
}
export default AppRouter;