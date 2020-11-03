import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Navigation from "components/Navigation"
import Home from "routes/Home";
import Roadmap from "routes/Roadmap";
import StudyGroup from "routes/StudyGroup";
import ContestGroup from "routes/ContestGroup";
import Profile from "routes/Profile";
import Auth from "routes/Auth";

/*
export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return(
    <Router>
      <Switch>
        {isLoggedIn ? (
        <>
        <Route exact path="/">
            <Home />
        </Route>
        </> 
        ) : (
        <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
    
  };
*/

//경로
const AppRouter = () => {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact={true} component={Home}>Home</Route>
      <Route path="/roadmap" exact={true} component={Roadmap}></Route>
      <Route path="/studygroup" exact={true} component={StudyGroup}></Route>
      <Route path="/contestgroup" exact={true} component={ContestGroup}></Route>
      <Route path="/profile" exact={true} component={Profile}></Route>
      <Route path="/login" exact={true} component={Auth}></Route>
    </Router>
  );
}
export default AppRouter;

