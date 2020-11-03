import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navigation from "components/Navigation"
import Home from "routes/Home";
//import Roadmap from "routes/Roadmap";
import StudyGroup from "routes/StudyGroup";
import ContestGroup from "routes/ContestGroup";
import Profile from "routes/Profile";
import StudyGroupForm from "components/group/StudyGroupForm";
import Sample from "components/roadmap/Sample";
import Table from "components/group/G_HS";



//경로
const AppRouter = () => {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact={true} component={Home}>Home</Route>
      <Route path="/components/roadmap/Sample" exact={true} component={Sample}></Route>
      <Route path="/components/group/G_HS" exact={true} component={Table}></Route>
      <Route path="/studygroup" exact={true} component={StudyGroup}></Route>
      <Route path="/contestgroup" exact={true} component={ContestGroup}></Route>
      <Route path="/profile" exact={true} component={Profile}></Route>
      <Route path="/sample_form" exact={true} component={StudyGroupForm}></Route>
    </Router>
  );
}
export default AppRouter;