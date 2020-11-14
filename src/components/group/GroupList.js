import React, { useState, useEffect } from "react";
import { HashRouter as Router, Link, useHistory } from "react-router-dom";
import { dbService } from "fbase";
import { objectFromLocalStorage } from "init";

const GroupList = (props) => {
  const history = useHistory();

  const [groups, setGroup] = useState([]);
  const getGroup = async (group_lecture) => {
    const userId = objectFromLocalStorage("user");
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
        document.data().creator.userId == userId
      ) {
        const groupObject = {
          ...document.data(),
          id: document.id,
        };
        setGroup((prev) => [groupObject, ...prev]);
      }
    });
  };

  const { group_lecture } = props;
  useEffect(() => {
    console.log(history);

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
                  userObj: objectFromLocalStorage("user"),
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
