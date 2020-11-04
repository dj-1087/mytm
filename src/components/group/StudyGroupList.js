import React, { useState, useEffect } from "react";
import {HashRouter as Router, Link} from "react-router-dom";
import { dbService } from "fbase";

const StudyGroupList = (props) => {
  
  const [groups, setGroup] = useState([]);
  const getGroup = async (group_lecture) => {
    const dbGroup = await dbService.collection("groups").get();
    dbGroup.forEach((document) => {
      if(document.data().info.group_lecture===group_lecture) {
        console.log(group_lecture);
        const groupObject = {
          ...document.data(),
          id: document.id,
        };
        setGroup((prev) => [groupObject, ...prev]);
      }
    });
  };
  useEffect(() => {
    console.log(props);
    const {location, history} = props;
    const group_lecture = location.state.group_lecture;
    if (group_lecture === null) {
      history.push("/Home");
    }
    getGroup(group_lecture);
    /*dbService.collection("groups").onSnapshot((snapshot) => {
      const groupArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGroups(groupArray);
    });*/
  }, []);
  
  return (
    <div>
      <Router>
        {groups.map((group) => (
          <Link to={{
            pathname: `/studygrouplist/group/${group.info.group_name}`,
            state: {group_name: group.info.group_name, userObj: null}
          }}>
            <button id ={group.info.group_name}>{group.info.group_name}</button>
          </Link>
        ))}
      </Router>
    </div>
  )
}

export default StudyGroupList;