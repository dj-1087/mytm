import React, { useState, useEffect } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { dbService } from "fbase";
import { saveHistoryState } from "init";

const GroupList = (props) => {
  const [groups, setGroup] = useState([]);
  const getGroup = async (group_lecture) => {
    const dbGroup = await dbService.collection("groups").get();
    dbGroup.forEach((document) => {
      if (document.data().info.group_lecture === group_lecture) {
        console.log(group_lecture);
        const groupObject = {
          ...document.data(),
          id: document.id,
        };
        setGroup((prev) => [groupObject, ...prev]);
      } else if (group_lecture === "all") {
        const groupObject = {
          ...document.data(),
          id: document.id,
        };
        setGroup((prev) => [groupObject, ...prev]);
      } else if (
        group_lecture === "myGroups" &&
        document.data().creator.userId == location.state.userObj.uid
      ) {
        const groupObject = {
          ...document.data(),
          id: document.id,
        };
        setGroup((prev) => [groupObject, ...prev]);
      }
    });
  };

  const { location, history, match } = props;
  useEffect(() => {
    console.log(location);
    let group_lecture = "";
    if (match.params.group_lecture === "all") {
      group_lecture = "all";
    } else {
      group_lecture = location.state.group_lecture;
    }
    if (group_lecture === null) {
      history.push("/Home");
    }
    getGroup(group_lecture);
  }, []);

  return (
    <div>
      {groups.map((group) => {
        return (
          <>
            <Link
              to={{
                pathname: `/studygrouplist/group_name/${group.info.group_name}`,
                state: {
                  groupObj: group,
                  userObj: location.state.userObj,
                },
              }}
            >
              <button id={group.info.group_name}>
                {group.info.group_name}
              </button>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default GroupList;
