import React from "react";
import StudyGroupList from "components/group/StudyGroupList"

const StudyGroup = ({userObj}) => {
  return (<StudyGroupList userObj={userObj} />);
}

export default StudyGroup;