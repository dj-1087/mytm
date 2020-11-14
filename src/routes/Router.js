import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "routes/Home";
import SignIn from "components/auth/SignIn";
import SignUp from "components/auth/SignUp";
import RoadMap from "components/roadmap/RoadMap";
import GroupList from "components/group/GroupList";

//경로
const AppRouter = ({ refreshUser }) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact="true" component={Home} />
        {/* 로그인 */}
        <Route path="/sign-in" exact={true} component={SignIn} />
        <Route path="/sign-up" exact={true}>
          <SignUp refreshUser={refreshUser} />
        </Route>
        {/* 로드맵 */}
        <Route path="/roadmap" exact={true} component={RoadMap} />
        {/* 그룹리스트 */}
        <Route
          path={`/studygrouplist/group/:group_lecture`}
          exact={true}
          component={GroupList}
        ></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
export default AppRouter;
